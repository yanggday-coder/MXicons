# 🎨 MX Icons - Figma

妙想icon库0.1 Figma


## 功能特性

- 📦 **动态加载** - 从 GitHub 实时加载图标数据
- 🎯 **一键创建** - 快速创建单个或批量图标
- 📂 **分类管理** - 图标按分类自动组织
- 🔄 **即时更新** - 无需重启即可刷新图标库

## 文件结构

```
MXicons/
├── manifest.json          # Figma 插件配置文件
├── code.js               # 插件主逻辑（后端）
├── ui.html               # 插件界面（前端）
├── icons.json            # 图标库数据
├── package.json          # 项目配置
└── README.md             # 本文件
```

## 快速开始

### 1. 在 Figma 中安装插件

- 打开 Figma
- 进入 **Plugins > Development > New plugin**
- 选择 **Link existing manifest**
- 输入此仓库中 `manifest.json` 的路径

### 2. 使用插件

1. **打开插件** - 在 Figma 中运行此插件
2. **刷新图标库** - 从 GitHub 加载最新的图标数据
3. **添加图标** - 单击任何图标旁的"添加"按钮，或点击"全部创建"批量添加

## 数据格式

`dc icons.json` 中的图标数据格式：

```json
{
  "version": "1.0.0",
  "icons": [
    {
      "name": "icon-name",
      "id": "unique-id",
      "category": "Category Name"
    }
  ]
}
```

## API 接口

### 从 UI 到插件的消息

| 消息类型 | 参数 | 描述 |
|---------|------|------|
| `load-icons` | 无 | 加载图标库数据 |
| `create-icon` | `name`, `category` | 创建单个图标 |
| `create-all-icons` | 无 | 创建所有图标 |

### 从插件到 UI 的消息

| 消息类型 | 数据 | 描述 |
|---------|------|------|
| `icons-loaded` | `data` | 图标库加载完成，返回图标数据 |

## 技术栈

- **Figma Plugin API** - 官方插件接口
- **Vanilla JavaScript** - 无依赖的纯 JS 实现
- **Fetch API** - 远程加载数据

## 部署

### 发布到 Figma Community

1. 将插件上传到 Figma
2. 在插件设置中配置相关信息
3. 提交审核

### 本地开发

```bash
# 使用 Figma 官方开发工具
npm install -g @figma/plugin-cli

# 开发模式
npm run dev

# 构建
npm run build
```

## 网络访问权限

此插件需要访问以下域名：

- `https://api.github.com` - GitHub API
- `https://raw.githubusercontent.com` - GitHub 原始文件访问

## 更新图标库

只需更新GitHub仓库Icons文件夹内容，Figma插件自动更新最新图标数据。

## 许可证

MIT

## 作者

@yanggang-coder