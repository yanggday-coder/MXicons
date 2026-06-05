// 显示插件 UI 窗口
figma.showUI(__html__, { width: 300, height: 480 }); // 稍微加高了一点点空间留给按钮

// 监听从前端 UI 传过来的消息
figma.ui.onmessage = async (msg) => {
  if (msg.type === 'INSERT_ICON') {
    try {
      // 1. 在画布上创建矢量节点
      const iconNode = figma.createNodeFromSvg(msg.svg);
      iconNode.name = msg.name; 

      // 🌟 动态获取用户在界面上选择的尺寸（如果没有传，默认保底用 16）
      const TARGET_SIZE = msg.size || 16; 
      
      // 2. 保持等比例强制缩放
      const scale = TARGET_SIZE / Math.max(iconNode.width, iconNode.height);
      iconNode.resize(iconNode.width * scale, iconNode.height * scale);

      // 3. 居中放置在当前画布视口
      iconNode.x = figma.viewport.center.x - iconNode.width / 2;
      iconNode.y = figma.viewport.center.y - iconNode.height / 2;

      // 4. 自动选中新插入的图标
      figma.currentPage.selection = [iconNode];
    } catch (error) {
      figma.notify("图标解析失败，请检查 SVG 格式是否规范");
    }
  }
};
