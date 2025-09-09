#!/usr/bin/env python3
"""
快速更新VitePress侧边栏配置脚本
简化版本，用于日常更新
"""

import subprocess
import sys
from pathlib import Path

def main():
    """主函数 - 快速更新侧边栏"""
    print("🔄 快速更新VitePress侧边栏配置...")
    
    # 运行完整的侧边栏生成脚本
    script_dir = Path(__file__).parent
    generate_script = script_dir / "generate_sidebar.py"
    
    try:
        result = subprocess.run([sys.executable, str(generate_script)], 
                              capture_output=True, text=True, check=True)
        print(result.stdout)
        print("✅ 侧边栏配置更新完成！")
        
    except subprocess.CalledProcessError as e:
        print(f"❌ 更新失败: {e}")
        print(f"错误输出: {e.stderr}")
        return 1
    
    return 0

if __name__ == "__main__":
    sys.exit(main())