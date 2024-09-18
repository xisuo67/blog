import Translate, { translate } from '@docusaurus/Translate'
import { Icon } from '@iconify/react'
// import WebDeveloperSvg from '@site/static/imgresource/undraw_web_developer.svg'

export type FeatureItem = {
  title: string | React.ReactNode
  description: string | React.ReactNode
  header: React.ReactNode
  icon?: React.ReactNode
}

const FEATURES: FeatureItem[] = [
  {
    title: translate({
      id: 'homepage.feature.developer',
      message: '.Net 软件工程师',
    }),
    description: (
      <Translate>
       .Net、python、go，相对拉跨的C++能力，勉强算个全栈（头疼CSS的问题） 想法特别多，什么都感兴趣的程序员
      </Translate>
    ),
    header: <img src="/img/resource/work.webp" width={380}  height={180}/>,
    icon: <Icon width={20} icon="skill-icons:dotnet" className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: translate({
      id: 'homepage.feature.spider',
      message: '逆向 & 爬虫',
    }),
    description: (
      <Translate>
        对于逆向工程有着浓厚的兴趣，喜欢瞎折腾，总结并学习逆向知识，擅长.Net、python，超凡的阅读代码能力
      </Translate>
    ),
    header: <img src="/img/resource/spider.jpg" width={380}  height={160} />,
    icon: <Icon width={40} icon="emojione:spider" className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: translate({
      id: 'homepage.feature.enthusiast',
      message: '开源爱好者',
    }),
    description: (
      <Translate>
        作为一名开源爱好者，积极参与开源社区，为开源项目贡献代码。
      </Translate>
    ),
    header: <img src="/img/resource/github-title.png" width={380}  height={180}/>,
    icon: <Icon width={20} icon="devicon:github" className="h-4 w-4 text-neutral-500" />,
  },
]

export default FEATURES
