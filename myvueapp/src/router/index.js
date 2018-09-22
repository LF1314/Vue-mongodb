import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'login',
      component: () =>
        import('@/components/login'),
      meta: {
        title: '登录页面'
      }
    },
    {
      path: '/home',
      name: 'home',
      redirect: '/home/index',
      component: () =>
        import('@/components/admin/home'),
      children: [
        // 登陆首页
        {
          path: 'index',
          name: 'index',
          component: () =>
            import('@/components/admin/usercenter')
        },
        //管理员列表
        {
          path: 'adminlist',
          name: 'adminlist',
          component: () =>
            import('@/components/adminpage/adminlist')
        },
        //添加管理员
        {
          path: 'addadmin',
          name: 'addadmin',
          component: () =>
            import ('@/components/adminpage/addadmin')
        },
        //学生列表
        {
          path: 'studentlist',
          name: 'studentlist',
          component: () =>
            import ('@/components/student/studentlist')
        },
        //添加学生
        {
          path: 'addstudent',
          name: 'addstudent',
          component: () =>
            import('@/components/student/addstudent')
        }
      ]
    }

  ]
})
