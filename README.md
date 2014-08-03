nginx setting


server {
# error_log /var/log/nginx/error.log debug;

set $app_directory    /home/dingding/NetBeansProjects/hubstar/app_hubstar/dist;
set $yii_bootstrap     "index.php";


#############################################
### Local DevBox Develop Configuration    ###
#############################################

if ($host ~* develop\.(.*)) {
  set $app_directory    "/home/dingding/NetBeansProjects/hubstar/app_hubstar/dist";
}
if ($host ~* api.develop\.(.*)){
  set $app_directory    "/home/dingding/NetBeansProjects/hubstar/app_restAPI";    
}


listen     80;
server_name _;
charset utf-8;
root $app_directory;
client_max_body_size 20m;
location / {
      index  index.html $yii_bootstrap;
      try_files $uri $uri/ /$yii_bootstrap?$args;
}

location ~ ^/(protected|framework|themes/\w+/views) {
      deny  all;
}

location ~ \.(js|css|png|jpg|gif|swf|ico|pdf|mov|fla|zip|rar)$ {
      try_files $uri =404;
}

location ~ \.php$ {
fastcgi_split_path_info ^(.+\.php)(/.+)$;
set $fsn /$yii_bootstrap;
if (-f $document_root$fastcgi_script_name){
    set $fsn $fastcgi_script_name;
}
fastcgi_pass unix:/var/run/php5-fpm.sock;
include fastcgi_params;
fastcgi_param  PATH_INFO        $fastcgi_path_info;
fastcgi_param  PATH_TRANSLATED  $document_root$fsn;
}

location ~ /\.ht {
deny  all;
}
}
