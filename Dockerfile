FROM node

WORKDIR /home

RUN git clone https://github.com/ppolyzos/material-dashboard-angular && cd material-dashboard-angular && npm install

ADD ng-serve.sh /home/material-dashboard-angular

ENTRYPOINT [ "/home/material-dashboard-angular/ng-serve.sh" ]
