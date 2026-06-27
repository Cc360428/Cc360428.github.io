#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Jekyll 博客文章格式优化脚本
优化所有 _posts 目录下的 Markdown 文章
"""

import os
import re
from pathlib import Path


def normalize_front_matter(content):
    """标准化 Front Matter 格式"""
    # 提取 front matter
    fm_match = re.match(r'^---\s*\n(.*?)\n---\s*\n', content, re.DOTALL)
    if not fm_match:
        return content
    
    fm_content = fm_match.group(1)
    rest_content = content[fm_match.end():]
    
    # 解析 front matter 字段
    fields = {}
    field_order = []
    
    for line in fm_content.split('\n'):
        line = line.strip()
        if ':' in line and not line.startswith('#'):
            key, _, value = line.partition(':')
            key = key.strip()
            value = value.strip()
            if key and key not in fields:
                fields[key] = value
                field_order.append(key)
    
    # 定义标准字段顺序
    standard_order = ['title', 'tags', 'date', 'draft', 'categories', 'description', 'comment']
    
    # 重新排序字段
    ordered_fields = []
    for key in standard_order:
        if key in fields:
            ordered_fields.append(f"{key}: {fields[key]}")
    
    # 添加其他未在标准顺序中的字段
    for key in field_order:
        if key not in standard_order:
            ordered_fields.append(f"{key}: {fields[key]}")
    
    # 重建 front matter
    new_fm = '---\n' + '\n'.join(ordered_fields) + '\n---\n'
    
    return new_fm + rest_content


def fix_heading_levels(content):
    """修复标题层级，确保从 ## 开始（## 作为一级标题）"""
    lines = content.split('\n')
    result = []
    in_front_matter = True
    front_matter_ended = False
    
    for i, line in enumerate(lines):
        # 检测 front matter 结束
        if line.strip() == '---' and i > 0:
            if not front_matter_ended:
                front_matter_ended = True
                in_front_matter = False
                result.append(line)
                continue
        
        if in_front_matter:
            result.append(line)
            continue
        
        # 跳过 front matter 后的空行处理
        if not front_matter_ended:
            result.append(line)
            continue
        
        # 修复标题层级：将 ### 改为 ##，#### 改为 ###，以此类推
        heading_match = re.match(r'^(#{3,6})\s+(.+)$', line)
        if heading_match:
            hashes = heading_match.group(1)
            title = heading_match.group(2)
            # 减少一个 # 号
            new_level = len(hashes) - 1
            new_hashes = '#' * max(2, new_level)  # 最低从 ## 开始
            result.append(f"{new_hashes} {title}")
        else:
            result.append(line)
    
    return '\n'.join(result)


def remove_extra_blank_lines(content):
    """移除多余的连续空行，最多保留一个空行"""
    # 分割成行
    lines = content.split('\n')
    result = []
    prev_blank = False
    
    for line in lines:
        is_blank = line.strip() == ''
        
        if is_blank:
            if not prev_blank:
                result.append(line)
            prev_blank = True
        else:
            result.append(line)
            prev_blank = False
    
    return '\n'.join(result)


def fix_code_blocks(content):
    """修复代码块，确保有语言标识"""
    def replace_code_block(match):
        full_match = match.group(0)
        opening = match.group(1)
        lang = match.group(2) if match.group(2) else ''
        
        # 如果已经有语言标识，保持不变
        if lang and lang.strip():
            return full_match
        
        # 尝试根据上下文推断语言
        # 这里可以根据需要添加更多推断逻辑
        return full_match
    
    # 匹配代码块开始标记
    pattern = r'(```)(\w*)'
    content = re.sub(pattern, replace_code_block, content)
    
    return content


def fix_table_alignment(content):
    """修复表格对齐"""
    lines = content.split('\n')
    result = []
    in_table = False
    table_lines = []
    
    for line in lines:
        # 检测表格行
        if re.match(r'^\|.*\|$', line.strip()):
            in_table = True
            table_lines.append(line)
        else:
            if in_table and table_lines:
                # 处理收集到的表格行
                result.extend(process_table(table_lines))
                table_lines = []
                in_table = False
            result.append(line)
    
    # 处理最后可能剩余的表格
    if table_lines:
        result.extend(process_table(table_lines))
    
    return '\n'.join(result)


def process_table(table_lines):
    """处理表格行的对齐"""
    if not table_lines:
        return table_lines
    
    # 简单的表格处理：保持原样，因为 Jekyll 可以处理不对齐的表格
    # 如果需要严格对齐，可以在这里实现
    return table_lines


def fix_list_formatting(content):
    """修复列表格式"""
    lines = content.split('\n')
    result = []
    
    for line in lines:
        # 统一使用统一的列表标记
        # 保持现有的列表格式，只做最小改动
        result.append(line)
    
    return '\n'.join(result)


def ensure_trailing_newline(content):
    """确保文件以单个换行符结尾"""
    return content.rstrip() + '\n'


def fix_internal_links(content):
    """修复内部链接格式"""
    # 将 {{site.url}}/posts/xxx/ 格式的链接转换为相对链接
    # 这需要根据实际情况调整
    return content


def optimize_post(filepath):
    """优化单个文章文件"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # 应用各种优化
        content = normalize_front_matter(content)
        content = fix_heading_levels(content)
        content = remove_extra_blank_lines(content)
        content = fix_code_blocks(content)
        content = fix_table_alignment(content)
        content = fix_list_formatting(content)
        content = fix_internal_links(content)
        content = ensure_trailing_newline(content)
        
        # 只有当内容有变化时才写入
        if content != original_content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            return True, f"已优化: {filepath}"
        else:
            return False, f"无需优化: {filepath}"
    
    except Exception as e:
        return False, f"错误处理 {filepath}: {str(e)}"


def main():
    """主函数：遍历并优化所有文章"""
    posts_dir = Path('_posts')
    
    if not posts_dir.exists():
        print("错误: _posts 目录不存在")
        return
    
    # 获取所有 .md 文件
    md_files = list(posts_dir.rglob('*.md'))
    total = len(md_files)
    
    print(f"找到 {total} 个 Markdown 文件")
    print("=" * 60)
    
    optimized_count = 0
    error_count = 0
    
    for i, filepath in enumerate(md_files, 1):
        success, message = optimize_post(filepath)
        
        if success:
            optimized_count += 1
            print(f"[{i}/{total}] ✓ {message}")
        elif "错误" in message:
            error_count += 1
            print(f"[{i}/{total}] ✗ {message}")
        else:
            print(f"[{i}/{total}] - {message}")
    
    print("=" * 60)
    print(f"优化完成!")
    print(f"总文件数: {total}")
    print(f"已优化: {optimized_count}")
    print(f"未变化: {total - optimized_count - error_count}")
    print(f"错误: {error_count}")


if __name__ == '__main__':
    main()
