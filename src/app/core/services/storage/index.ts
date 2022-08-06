import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Storage {
  constructor() {}

  get(key: string): string | null {
    return localStorage.getItem(key);
  }

  set(key: string, value: any) {
    localStorage.setItem(key, value);
  }

  gets(items: any[]): any {
    const dataContainer: any = [];
    items.forEach((name) => {
      dataContainer.push({
        key: name,
        value: localStorage.getItem(name),
      });
    });
    return dataContainer;
  }

  sets(items: any[]) {
    items.forEach((el: any) => {
      this.set(el.key, el.value);
    });
  }

  remove(key: string) {
    return localStorage.removeItem(key);
  }
  removes(key: string[]){
    key.forEach((el:string)=>{
          localStorage.removeItem(el)
      })
  }
}
