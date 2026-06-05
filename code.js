// 显示插件 UI 窗口，宽 300px，高 450px
figma.showUI(__html__, { width: 300, height: 450 });

// 监听从前端 UI 传过来的消息
figma.ui.onmessage = async (msg) => {
  if (msg.type === 'INSERT_ICON') {
    try {
      // 将接收到的 SVG 字符串在画布上创建为矢量节点
      const iconNode = figma.createNodeFromSvg(msg.svg);
      iconNode.name = msg.name; // 将图层命名为图标的文件名

      // 居中放置在当前画布视口
      iconNode.x = figma.viewport.center.x - iconNode.width / 2;
      iconNode.y = figma.viewport.center.y - iconNode.height / 2;

      // 自动选中新插入的图标
      figma.currentPage.selection = [iconNode];
    } catch (error) {
      figma.notify("图标解析失败，请检查 SVG 格式是否规范");
    }
  }
};