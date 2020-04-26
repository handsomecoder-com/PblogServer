import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  // static: true,
  // nunjucks: {
  //   enable: true,
  //   package: 'egg-view-nunjucks',
  // },
  mongo: {
    enable: true,
    package: 'egg-mongo-native',
  }
};

export default plugin;
