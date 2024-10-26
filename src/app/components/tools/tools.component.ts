import { Component } from '@angular/core';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent {
  toolBox: any = [
    { img: 'assets/images/organization-img.svg', header: 'Pengwyn Autonomous Organization (PAO)' },
    { img: 'assets/images/stats-img.svg', header: 'Pengwyn \nStats' },
    { img: 'assets/images/save-money-img.svg', header: 'Pengwyn Sales Force Program' },
    { img: 'assets/images/raise-hand-img.svg', header: 'Pengwyn Suggestion Votings' },
  ]

  productBox: any = [
    {
      img: 'assets/images/file-icon.svg', header1: 'Pengwyn', header2: 'Expenditure Module', detail: `The Pengwyn Expenditure Module is planned to enhance
    transparency by providing a visual
    representation of the company's expenditures and liabilities.` },
    {
      img: 'assets/images/blockchain-icon.svg', header1: 'Pengwyn', header2: 'BINC Node', detail: `Pengwyn BINC Node is specifically planned to empower
      Pengwyn BINC shareholders in making node decisions while ensuring the security of the ICON
      Blockchain` },
    {
      img: 'assets/images/discord-tool-icon.svg', header1: 'Pengwyn', header2: 'Discord BOT', detail: `Pengwyn Discord BOT is planned to be implemented within
      the Pengwyn BINC Discord Server to automate role assignments for holders who own different
      types of NFTs and traits.` },
    {
      img: 'assets/images/monitor-icon.svg', header1: 'Pengwyn', header2: 'Management Module', detail: `Pengwyn Management Module is a company interface that
      is designed to provide management solutions for project managers on blockchain.` },
    {
      img: 'assets/images/blockchain-icon.svg', header1: 'Pengwyn Brands', header2: 'Blockchain Companies', detail: `Pengwyn Brands refers to a business initiative program
      that empowers owners of Pengwyn BINC NFT holders to establish their own businesses on
      blockchain.` },
      {
        img: 'assets/images/innovation-icon.svg', header1: 'Pengwyn', header2: 'Innovation HUB', detail: `Pengwyn Innovation HUB is a platform that connects
        different stakeholders of blockchain, including developers, auditors, entrepreneurs, and
        investors.` },
        {
          img: 'assets/images/rocket-icon.svg', header1: 'Pengwyn BINC', header2: 'Blockchain Companies', detail: `Pengwyn BINC Launchpad is a planned all-in-one toolkit
          for entrepreneurs to create their own blockchain businesses from scratch.` },
  ]

}
