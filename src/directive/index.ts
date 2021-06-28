import { App, Directive } from 'vue';
import { moduleFilter } from '@/util/helper';

function injectDirectives(app: App<Element>) {
  const modules = moduleFilter<{ default: { name?: string } }>(
    import.meta.globEager('./modules/**/*.{ts,js}')
  );

  //  匹配文件名称的正则
  //TODO 正则没有全部满足
  const directiveRegex = /\/([\w\d-]+)([.-]?[dD]irective)?\/([\w\d-]+)([.-]?[dD]irective)?\.[tj]s$/;

  Object.keys(modules)
    .map((key) => {
      const directive = modules[key].default as Directive;
      if (!directive) return null;

      console.log('directive', directive);
      console.log('key', key);
      
      const fileMatch = key.match(directiveRegex);
      console.log('fileMatch', fileMatch);
      

      //  获取组件名称
      //  组件名称匹配规则
      //  1.获取模块中name属性
      //  2. 如果文件名称不为index, 则取文件名称作为name, 否则取文件名称的上一级目录作为组件名称 文件名称和目录名称都会去掉[.-]directive
      const directiveName = directive?.name || (fileMatch[3] && fileMatch[3] !== 'index' ? fileMatch[3] : fileMatch[1]);

      return {
        name: directiveName,
        directive: directive,
      };
    })
    .filter((c) => !!c)
    .forEach((c) => {
      app.directive(c.name, c.directive);
    });
}


export function setupDirective(app: App<Element>): App<Element> {
  injectDirectives(app);
  return app;
}
