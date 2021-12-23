import { Component, OnInit } from '@angular/core';
import { ToDoItem } from '../to-do-item';
import {ITEMS} from '../mock-todo-item';
@Component({
  selector: 'app-to-do-items',
  templateUrl: './to-do-items.component.html',
  styleUrls: ['./to-do-items.component.scss']
/* styles: [
'.items { list-style-type: none;}',
'.items li {background-color: #EEE;}'
]*/
})
export class ToDoItemsComponent implements OnInit {
	 nameq:string="Tom";
	biggest:string;
	path:string;
items = ITEMS;
selectedItem: ToDoItem;
onSelect(item:ToDoItem){
	this.selectedItem=item;
}
  constructor() { }

  ngOnInit(): void {
  }
select1(){
	//this.path=`https://ru.wikinews.org/wiki/%D0%A1%D0%B0%D0%BC%D1%8B%D0%B9_%D0%B1%D0%BE%D0%BB%D1%8C%D1%88%D0%BE%D0%B9_%D0%B0%D0%B2%D1%82%D0%BE%D0%BC%D0%BE%D0%B1%D0%B8%D0%BB%D1%8C_%D0%B2_%D0%BC%D0%B8%D1%80%D0%B5_%D1%83%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%B8%D0%BB_%D1%80%D0%B5%D0%BA%D0%BE%D1%80%D0%B4_%D0%93%D0%B8%D0%BD%D0%BD%D0%B5%D1%81%D1%81%D0%B0#:~:text=%D0%A1%D0%B0%D0%BC%D1%8B%D0%B9%20%D0%B1%D0%BE%D0%BB%D1%8C%D1%88%D0%BE%D0%B9%20%D0%B0%D0%B2%D1%82%D0%BE%D0%BC%D0%BE%D0%B1%D0%B8%D0%BB%D1%8C%20%D0%B2%20%D0%BC%D0%B8%D1%80%D0%B5%20%D1%83%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%B8%D0%BB%20%D1%80%D0%B5%D0%BA%D0%BE%D1%80%D0%B4%20%D0%93%D0%B8%D0%BD%D0%BD%D0%B5%D1%81%D1%81%D0%B0,-%D0%AF%D0%B7%D1%8B%D0%BA&text=%D0%9D%D0%B5%D0%B4%D0%B0%D0%B2%D0%BD%D0%BE%20%D0%B8%D0%B7%D0%B2%D0%B5%D1%81%D1%82%D0%BD%D1%8B%D0%B9%20%D1%81%D0%B0%D0%BC%D0%BE%D1%81%D0%B2%D0%B0%D0%BB%2D%D0%B3%D0%B8%D0%B3%D0%B0%D0%BD%D1%82%20%D0%91%D0%B5%D0%BB%D0%90%D0%97,%D0%B2%D0%B5%D1%81%D0%BE%D0%BC%20%D0%B2%20503%2C5%20%D1%82%D0%BE%D0%BD%D0%BD%D1%8B.`;
	 this.biggest="Самый большой автомобиль в мире установил рекорд Гиннесса Недавно известный самосвал-гигант БелАЗ-75710 установил мировой рекорд по грузоподъёмности. На испытательном полигоне автомобиль перевёз груз весом в 503,5 тонны";
}
}
