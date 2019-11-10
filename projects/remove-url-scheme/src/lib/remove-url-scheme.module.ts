import { NgModule } from '@angular/core';
import { RemoveUrlSchemePipe } from './remove-url-scheme.pipe';

@NgModule({
  declarations: [RemoveUrlSchemePipe],
  providers: [RemoveUrlSchemePipe],
  exports: [RemoveUrlSchemePipe]
})
export class RemoveUrlSchemeModule { }
