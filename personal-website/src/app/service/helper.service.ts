import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
export class HelperService {
    
    currentComponent: string = 'home';

    setCurrentComponent(component: string){
        this.currentComponent = component;
    }
}