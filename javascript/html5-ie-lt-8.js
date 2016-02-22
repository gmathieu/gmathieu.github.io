var html5Tags = [
    'abbr','article','aside','audio','canvas','datalist','details',
    'figure','footer','header','hgroup','mark','menu','meter','nav',
    'output','progress','section','time','video'
];
for (var i = 0; i < html5Tags.length; i++) {
    document.createElement(html5Tags[i]);
}