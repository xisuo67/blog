export const projects: Project[] = [
    // personal
    {
      title: 'Youtube.Spider',
      description: '📦 简单，轻量且实用的YouTube批量下载工具，它可以快速搜索并下载youtube上的视频',
      preview: '/img/project/youtube.spider.png',
      website: 'https://xisuo67.website/YouTube-Spider-Doc',
      tags: ['product','personal'],
      type: 'personal',
    },
    {
      title: 'XHS.Spider',
      description: 'XHS-Spider是一款小红书数据采集、网站图片、视频资源批量下载工具，颜值超高的数据采集工具（主要用于批量下载，视频提取，图片，去水印等）',
      preview: '/img/project/xhs.spider.png',
      website: 'https://xisuo67.website/XHS-Spider-Doc',
      source: 'https://github.com/xisuo67/XHS-Spider',
      tags: ['product','opensource', 'personal'],
      type: 'personal',
    },

  {
    title: 'xisuo67的小站',
    description: '🦖 基于 Docusaurus 静态网站生成器实现个人博客',
    preview: '/img/project/blog.png',
    website: 'https://yfloves.cn',
    source: 'https://github.com/xisuo67/blog',
    tags: ['opensource', 'design', 'favorite'],
    type: 'web',
  },
  {
    title: '参与开源项目汇总',
    description: 'Jekyll 主题，基于 Uno-Theme，带有项目列表作为时间轴',
    preview: '/img/project/xisuo67_website.png',
    website: 'https://xisuo67.website',
    source: 'https://github.com/xisuo67/xisuo67.github.io',
    tags: ['opensource', 'favorite'],
    type: 'web',
  },
  {
    title: '集成管理平台',
    description: '基于vue3.x 、Typescript、vite、Element plus等，适配手机、平板、pc 的后台项目。主要用于日常开发的各种工具后台授权及版本控制',
    preview: '/img/project/admin_system.png',
    website: 'http://xisuo67.system.yfloves.cn',
    tags: ['medium', 'product'],
    type: 'web',
  },
  {
    title: 'Geeker码云',
    description: '微信、支付宝收款码二合一小程序',
    preview: '/img/project/geekercloud.png',
    website: '',
    tags: ['favorite', 'product'],
    type: 'app',
  },
  {
    title: 'Geek空间',
    description: '🔗 基于集成平台开发用于观看广告延期授权的小程序',
    preview: '/img/project/geekkj.png',
    website: '',
    tags: ['product'],
    type: 'app',
  },
  {
    title: 'Geek解析',
    description: '解析视频，抖音,皮皮虾,火山,微视,最右,快手,全民小视频,皮皮搞笑,西瓜视频,虎牙,梨视频,acfun,好看视频...',
    preview: '/img/project/geekprasemini.png',
    website: '',
    tags: ['product'],
    type: 'app',
  },
  // toy
  {
    title: 'Wails-Tool-Template',
    description: '这是一个使用go开发的基于wails的跨平台开箱即用的桌面客户端解决方案，同时是一个仿网易云的客户端，旨在开箱即用，所有数据均使用mock数据',
    preview: '/img/project/Wails-Tool-Template.png',
    website: 'https://github.com/xisuo67/Wails-Tool-Template',
    source: 'https://github.com/xisuo67/Wails-Tool-Template',
    tags: ['opensource', 'favorite'],
    type: 'toy',
  },
  {
    title: 'GeekPrase（Geek解析）',
    description: '🌱这是一个使用go开发的项目，主要用于学些wails。同时尝试使用wails打造的跨平台客户端项目，解析视频，抖音,皮皮虾,火山,微视,最右,快手,全民小视频,皮皮搞笑,西瓜视频,虎牙,梨视频,acfun,好看视频...',
    preview: '/img/project/GeekPrase.png',
    website: 'https://github.com/xisuo67/GeekPrase',
    source: 'https://github.com/xisuo67/GeekPrase',
    tags: ['opensource', 'favorite', 'personal'],
    type: 'toy',
  },
]

export type Tag = {
  label: string
  description: string
  color: string
}

export type TagType = 'favorite' | 'opensource' | 'product' | 'design' | 'large' | 'personal' |'medium'

export type ProjectType = 'web' | 'app' | 'commerce' | 'personal' | 'toy' | 'other'

export const projectTypeMap = {
  web: '🖥️ 网站',
  app: '💫 应用、小程序',
  commerce: '商业项目',
  personal: '👨‍💻 个人',
  toy: '玩票项目',
  other: '🗃️ 其他',
}

export type Project = {
  title: string
  description: string
  preview?: string
  website: string
  source?: string | null
  tags: TagType[]
  type: ProjectType
}

export const Tags: Record<TagType, Tag> = {
  favorite: {
    label: '喜爱',
    description: '我最喜欢的网站，一定要去看看!',
    color: '#e9669e',
  },
  opensource: {
    label: '开源',
    description: '开源项目可以提供灵感!',
    color: '#39ca30',
  },
  product: {
    label: '产品',
    description: '与产品相关的项目!',
    color: '#dfd545',
  },
  design: {
    label: '设计',
    description: '设计漂亮的网站!',
    color: '#a44fb7',
  },
  medium: {
    label: '中型',
    description: '中型项目',
    color: '#8c2f00',
  },
  large: {
    label: '大型',
    description: '大型项目，原多于平均数的页面',
    color: '#8c2f00',
  },
  personal: {
    label: '个人',
    description: '个人项目',
    color: '#12affa',
  },
}

export const TagList = Object.keys(Tags) as TagType[]

export const groupByProjects = projects.reduce(
  (group, project) => {
    const { type } = project
    group[type] = group[type] ?? []
    group[type].push(project)
    return group
  },
  {} as Record<ProjectType, Project[]>,
)
