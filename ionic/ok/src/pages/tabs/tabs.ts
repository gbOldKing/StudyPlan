import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { DiscoveryPage } from '../discovery/discovery';
import { ChatPage } from '../chat/chat';
import { NotifacationPage } from '../notifacation/notifacation';
import { MorePage } from '../more/more';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tabHome = HomePage;
  tabDiscovery = DiscoveryPage;
  tabChat=ChatPage;
  tabNotification=NotifacationPage;
  tabMore = MorePage;

  constructor() {

  }
}
