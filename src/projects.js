export default [
  {
    id: 'Export CRM',
    logo: 'http://mwusweb-test.hs6.top/img/logo.66381d86.png',
    app: [
      {
        title: '出口CRM - PC端',
        codeUrl: 'https://codeup.aliyun.com/65b86bdc5a65f4794e1f8131/mwoverseas-pc',
        tag: [
          {
            title: '测试(test)',
            url: 'http://mwusweb-test.hs6.top',
            pipeline:
              'https://flow.aliyun.com/pipelines/2917253/current?spm=a2cl9.codeup_devops2020_goldlog_projectPipeline.0.0.291249dfJf2UhR',
          },
          {
            title: '生产(master)',
            url: 'https://crmusweb.manwahgroup.com',
            pipeline:
              'https://flow.aliyun.com/pipelines/2917687/current?spm=a2cl9.codeup_devops2020_goldlog_projectPipeline.0.0.291249dflXSvWx',
          },
        ],
      },
      {
        title: '出口CRM - 移动端',
        codeUrl: 'https://codeup.aliyun.com/65b86bdc5a65f4794e1f8131/manwah-overseas-app',
        tag: [
          {
            title: '测试(test)',
            url: 'http://crmphone-test.minjish.cn/overseasApp/#/home',
            pipeline:
              'https://flow.aliyun.com/pipelines/3613208/current?spm=a2cl9.codeup_devops2020_goldlog_projectPipeline.0.0.55857b00Tv0q4R',
          },
          {
            title: '生产(master)',
            url: 'https://crmapp.manwahgroup.com/overseasApp/#/login',
            pipeline:
              'https://flow.aliyun.com/pipelines/3613208/current?spm=a2cl9.codeup_devops2020_goldlog_projectPipeline.0.0.55857b00Tv0q4R',
          },
        ],
      },
      {
        title: '出口CRM - 移动端子项目',
        codeUrl: 'https://codeup.aliyun.com/65b86bdc5a65f4794e1f8131/manwah-overseas-app-pi',
        tag: [
          {
            title: '测试(test)',
            url: 'http://crmphone-test.minjish.cn/overseasApp/#/home',
            pipeline:
              'https://flow.aliyun.com/pipelines/3576380/current?spm=a2cl9.codeup_devops2020_goldlog_projectPipeline.0.0.27ad5ee0YMwJLB',
          },
          {
            title: '生产(master)',
            url: 'https://crmapp.manwahgroup.com/overseasApp/#/login',
            pipeline:
              'https://flow.aliyun.com/pipelines/3612762/current?spm=a2cl9.codeup_devops2020_goldlog_projectPipeline.0.0.27ad5ee0YMwJLB',
          },
        ],
      },
    ],
  },
  {
    id: 'Domestic CRM',
    logo: 'http://mwcrmgarrisonspc-test.hs6.top/static/images/logo.png',
    app: [
      {
        title: '国内CRM - PC端',
        codeUrl: 'https://codeup.aliyun.com/65b86bdc5a65f4794e1f8131/mw-crm/mh-admin-pc-web',
        tag: [
          {
            title: '测试',
            url: 'http://mwcrmgarrisonspc-test.hs6.top',
            pipeline:
              'https://flow.aliyun.com/pipelines/2900564/current?spm=a2cl9.codeup_devops2020_goldlog_projectPipeline.0.0.6a5e7be3DpBppZ',
          },
          {
            title: 'UAT',
            url: 'http://mwcrmpc-uat.hs6.top/#/login',
            pipeline:
              'https://flow.aliyun.com/pipelines/2904335/current?spm=a2cl9.codeup_devops2020_goldlog_projectPipeline.0.0.6a5e7be3DpBppZ',
          },
          {
            title: '生产',
            url: 'https://crmpc.manwahgroup.com',
            pipeline:
              'https://flow.aliyun.com/pipelines/2904348/current?spm=a2cl9.codeup_devops2020_goldlog_projectPipeline.0.0.6a5e7be3kNyEbk',
          },
        ],
      },
      {
        title: '国内CRM - 移动端',
        codeUrl: 'https://codeup.aliyun.com/65b86bdc5a65f4794e1f8131/mh-crm-phone',
        tag: [
          {
            title: '测试',
            url: 'http://mwcrmphone-test.hs6.top/#/login',
            pipeline: '',
          },
          {
            title: 'UAT',
            url: 'http://mwcrmphone-uat.hs6.top/#/login',
            pipeline: '',
          },
          {
            title: '生产',
            url: 'https://crmapp.manwahgroup.com/#/login',
            pipeline: '',
          },
        ],
      },
      {
        title: '国内CRM三大指标 - 移动端',
        codeUrl: 'https://codeup.aliyun.com/65b86bdc5a65f4794e1f8131/manwah-dealerFunc-phone.git',
      },
    ],
  },
  {
    id: 'MW SRM',
    logo: 'http://mwusweb-test.hs6.top/img/logo.66381d86.png',
    app: [
      {
        title: '敏华SRM系统 - PC端',
        codeUrl: 'http://10.14.3.222:7997/mw_srm_front/SrmSupplierPC',
        tag: [
          {
            title: 'UAT',
            url: 'http://www.cmuat.cheersofa.com:5001/#/login',
            pipeline: '',
          },
          {
            title: '生产',
            url: 'https://srm.manwahgroup.com/#/login',
            pipeline: '',
          },
        ],
      },
      {
        title: '敏华SRM系统 - 权限系统',
        codeUrl: 'http://10.14.3.222:7997/mw_srm_front/common-auth',
        tag: [
          {
            title: 'UAT',
            url: 'http://www.cmuat.cheersofa.com/auth/#/login',
            pipeline: '',
          },
          {
            title: '生产',
            url: 'https://srm.manwahgroup.com/auth/#/login',
            pipeline: '',
          },
        ],
      },
      {
        title: '敏华SRM系统 - 移动端',
        codeUrl: 'http://10.14.3.222:7997/mw_srm_front/srm-h5',
        tag: [
          {
            title: 'UAT',
            url: 'http://www.cmuat.cheersofa.com/h5/#/login',
            pipeline: '',
          },
          {
            title: '生产',
            url: 'https://srm.manwahgroup.com/h5/#/login',
            pipeline: '',
          },
        ],
      },
    ],
  },
  {
    id: 'MW SMS',
    logo: 'http://mwusweb-test.hs6.top/img/logo.66381d86.png',
    app: [
      {
        title: '生产现场SMS管理系统 - PC端',
        codeUrl: 'https://codeup.aliyun.com/65b86bdc5a65f4794e1f8131/pc-manwah-pms',
        tag: [
          {
            title: '测试',
            url: 'https://pms-test-pc.cheersofa.com/login',
            pipeline: '',
          },
          {
            title: 'UAT',
            url: 'https://pms-uat-pc.cheersofa.com/login',
            pipeline: '',
          },
          {
            title: '生产',
            url: 'https://pms-pc.cheersofa.com/login',
            pipeline: '',
          },
        ],
      },
      {
        title: '生产现场SMS管理系统 - TV端',
        codeUrl: 'https://codeup.aliyun.com/65b86bdc5a65f4794e1f8131/tv-manwah-pms',
        tag: [
          {
            title: '测试',
            url: 'https://pms-test-tv.cheersofa.com/#/',
            pipeline: '',
          },
          {
            title: 'UAT',
            url: 'https://pms-uat-tv.cheersofa.com/#/',
            pipeline: '',
          },
          {
            title: '生产',
            url: 'https://pms-tv.cheersofa.com/#/',
            pipeline: '',
          },
        ],
      },
      {
        title: '生产现场SMS管理系统 - 移动端',
        codeUrl: 'https://codeup.aliyun.com/65b86bdc5a65f4794e1f8131/sms-manwah-H5',
        tag: [
          {
            title: '测试',
            url: 'https://sms-manwah-h5-test.oss-cn-shenzhen.aliyuncs.com/#/login',
            pipeline: '',
          },
          {
            title: 'UAT',
            url: 'https://sms-manwah-h5-uat.oss-cn-shenzhen.aliyuncs.com/#/login',
            pipeline: '',
          },
          {
            title: '生产',
            url: 'https://sms-manwah-h5.oss-cn-shenzhen.aliyuncs.com/#/login',
            pipeline: '',
          },
        ],
      },
    ],
  },
  {
    id: 'Domestic Invoicing System',
    logo: 'http://mwusweb-test.hs6.top/img/logo.66381d86.png',
    app: [
      {
        title: '国内开单系统 - PC端',
        codeUrl: 'http://10.14.3.222:7997/mw_channel_front/Distributor-pc',
        tag: [
          {
            title: 'UAT(uat)',
            url: 'http://www.cmuat.cheersofa.com/dealer/login',
            pipeline: 'http://10.14.3.222:8089/job/uat-stockpc-front/',
          },
          {
            title: '生产(master)',
            url: 'https://dms-china.cheersofa.com/dealer/login',
            pipeline: 'http://10.14.3.222:8089/job/prod-stockpc-front/',
          },
        ],
      },
    ],
  },

  {
    id: 'E-commerce order management',
    logo: 'http://mwusweb-test.hs6.top/img/logo.66381d86.png',
    app: [
      {
        title: '电商订单管理 - PC端',
        tag: [{ title: '统一认证', url: 'http://10.14.15.219:9883/' }],
      },
    ],
  },
]
