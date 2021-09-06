export const GlobalVariable = {

    SITE_NAME: 'Debican Admin',
    PATTERNS: {
        email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    },
    tokenKey: 'debican_token'

};

export const SideBarList = {
    list: [
       
         {path: 'users', name: 'Users', icon: 'fa fa-users'},
         {path: 'universitie', name: 'University', icon: 'fa fa-university'},
         {path: 'homebanner', name: 'Home Page Banners', icon: 'fa fa-flag'},
    ]
};

export const CONSTANT = {
    languages: [{name: 'English', id: 1}, {name: 'Spanish', id: 2}]
};

