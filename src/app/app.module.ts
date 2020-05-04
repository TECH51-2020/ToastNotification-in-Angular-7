import { NgModule } from '@angular/core';    
import { BrowserModule } from '@angular/platform-browser';  
import { NotificationComponent} from './toastr-not.component';    
import {NotificationService} from './toastr-not.service';    
    
@NgModule({    
    declarations: [    
        NotificationComponent    
    ],  
    imports:[  
        BrowserModule  
    ],  
    exports: [    
        NotificationComponent    
    ],providers:[    
        NotificationService    
    ]    
})    
export class NotificationModule    
{    
}    