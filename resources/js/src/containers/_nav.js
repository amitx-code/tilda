export default [
  {
    _name: 'CSidebarNav',
    _children: [
        {
            _name: 'CSidebarNavItem',
            name: 'Мой сайт',
            to: '/mysite',
            icon: 'cil-speedometer',
            badge: {
                color: 'green',
                text: 'NEW'
            }
        },
        {
            _name: 'CSidebarNavDropdown',
            name: 'Страницы',
            route: '/pages',
            icon: 'cil-puzzle',
            items: [
                {
                    name: 'Список страниц',
                    to: '/pages/all',

                },



            ]
        },

    ]
  }
]