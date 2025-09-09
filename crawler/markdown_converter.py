#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Markdown 转换器 - 将HTML内容转换为Markdown格式
"""

import re
import os
from urllib.parse import urlparse
import html2text
from bs4 import BeautifulSoup


class MarkdownConverter:
    def __init__(self, output_dir):
        self.output_dir = output_dir
        self.h = html2text.HTML2Text()
        self._configure_html2text()
        
    def _configure_html2text(self):
        """配置html2text转换器"""
        self.h.ignore_links = False
        self.h.ignore_images = False
        self.h.ignore_emphasis = False
        self.h.body_width = 0  # 不限制行宽
        self.h.unicode_snob = True
        self.h.escape_snob = True
        
    def convert_to_markdown(self, parsed_content, file_path, version):
        """将解析的HTML内容转换为Markdown"""
        title = parsed_content['title']
        content_html = parsed_content['raw_html']
        
        # 预处理HTML
        processed_html = self._preprocess_html(content_html, file_path, version)
        
        # 转换为Markdown
        markdown_content = self.h.handle(processed_html)
        
        # 后处理Markdown
        markdown_content = self._postprocess_markdown(markdown_content, title)
        
        return markdown_content
    
    def _preprocess_html(self, html_content, file_path, version):
        """预处理HTML内容"""
        soup = BeautifulSoup(html_content, 'html.parser')
        
        # 处理代码块
        self._process_code_blocks(soup)
        
        # 处理图片
        self._process_images(soup, file_path, version)
        
        # 处理链接
        self._process_links(soup, file_path, version)
        
        # 处理表格
        self._process_tables(soup)
        
        return str(soup)
    
    def _process_code_blocks(self, soup):
        """处理代码块，确保正确的语言标识"""
        # 处理pre > code结构
        for pre in soup.find_all('pre'):
            code = pre.find('code')
            if code:
                # 尝试从class中提取语言
                classes = code.get('class', [])
                language = None
                for cls in classes:
                    if cls.startswith('language-'):
                        language = cls.replace('language-', '')
                        break
                    elif cls in ['cangjie', 'cj', 'javascript', 'python', 'bash', 'json', 'yaml']:
                        language = cls
                        break
                
                # 如果没有语言标识，尝试猜测
                if not language:
                    text = code.get_text()
                    if 'func ' in text or 'struct ' in text or 'enum ' in text:
                        language = 'cangjie'
                    elif text.strip().startswith(('$', '#')):
                        language = 'bash'
                
                if language:
                    code['class'] = [f'language-{language}']
    
    def _process_images(self, soup, file_path, version):
        """预处理图片标签（具体下载由ImageDownloader处理）"""
        # 保持图片标签不变，具体的路径更新和下载由ImageDownloader处理
        pass
    
    def _process_links(self, soup, file_path, version):
        """处理链接，转换内部链接为相对路径"""
        for link in soup.find_all('a'):
            href = link.get('href')
            if href and href.startswith('https://docs.cangjie-lang.cn/'):
                # 转换为相对路径
                # 提取路径部分
                path_part = href.replace('https://docs.cangjie-lang.cn/docs/' + version + '/', '')
                if path_part.endswith('.html'):
                    # 转换为markdown文件路径
                    md_path = path_part.replace('.html', '.md')
                    link['href'] = './' + md_path
    
    def _process_tables(self, soup):
        """处理表格，确保Markdown兼容性"""
        for table in soup.find_all('table'):
            # 确保表格有thead和tbody
            if not table.find('thead') and table.find('tr'):
                first_row = table.find('tr')
                if first_row:
                    thead = soup.new_tag('thead')
                    tbody = soup.new_tag('tbody')
                    
                    # 移动第一行到thead
                    first_row.extract()
                    thead.append(first_row)
                    table.insert(0, thead)
                    
                    # 移动剩余行到tbody
                    remaining_rows = table.find_all('tr')
                    for row in remaining_rows:
                        row.extract()
                        tbody.append(row)
                    table.append(tbody)
    
    def _postprocess_markdown(self, markdown_content, title):
        """后处理Markdown内容"""
        lines = markdown_content.split('\n')
        processed_lines = []
        
        # 添加标题（如果没有）
        if not any(line.startswith('#') for line in lines[:5]):
            processed_lines.append(f"# {title}")
            processed_lines.append("")
        
        for line in lines:
            # 清理多余的空行
            if line.strip() == "" and processed_lines and processed_lines[-1].strip() == "":
                continue
                
            # 修复代码块
            if line.strip().startswith('```') and not re.match(r'^```\w', line.strip()):
                line = '```'
                
            processed_lines.append(line)
        
        # 清理结尾的空行
        while processed_lines and processed_lines[-1].strip() == "":
            processed_lines.pop()
            
        return '\n'.join(processed_lines)
    
    def save_markdown(self, markdown_content, file_path):
        """保存Markdown文件"""
        full_path = os.path.join(self.output_dir, file_path)
        os.makedirs(os.path.dirname(full_path), exist_ok=True)
        
        with open(full_path, 'w', encoding='utf-8') as f:
            f.write(markdown_content)
        
        print(f"保存文档: {full_path}")