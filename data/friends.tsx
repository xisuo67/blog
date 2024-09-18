export const Friends: Friend[] = [
  {
    title: 'XHS.Spider',
    description: '小红书数据采集，颜值超高的数据采集工具（批量下载，视频提取，图片，去水印等）',
    website: 'https://xisuo67.website/XHS-Spider-Doc/',
    avatar: '/img/friend/XHS.png',
  },
  {
    title: 'YouTube.Spider',
    description: '轻量且实用的YouTube批量下载工具',
    website: 'https://xisuo67.website/YouTube-Spider-Doc/',
    avatar: '/img/friend/youtube.png',
  },
  // {
  //   title: 'Jetzihan',
  //   description: 'A bug maker.',
  //   website: 'https://www.jet-lab.site/',
  //   avatar: '/img/friend/jetzihan.png',
  // },
]

export type Friend = {
  title: string
  description: string
  website: string
  avatar?: string
}
