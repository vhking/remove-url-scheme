# remove-url-scheme

[![npm (scoped)](https://img.shields.io/npm/v/@helt/remove-url-scheme.svg)](https://www.npmjs.com/package/@helt)
[![GitHub issues](https://img.shields.io/github/issues/vhking/remove-url-scheme)](https://github.com/vhking/remove-url-scheme/issues)
[![GitHub stars](https://img.shields.io/github/stars/vhking/remove-url-scheme)](https://github.com/vhking/remove-url-scheme/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/vhking/remove-url-scheme)](https://github.com/vhking/remove-url-scheme/network)
[![GitHub license](https://img.shields.io/github/license/vhking/remove-url-scheme)](https://github.com/vhking/remove-url-scheme/blob/master/LICENSE)

Removes scheme from URL, i.e. Http://. Case insensitive


## Install

```powershell
$ npm install @helt/remove-url-scheme
```

## Usage

1) Register the `RemoveUrlSchemeModule` in your app module.
 > `import { RemoveUrlSchemeModule } from '@helt/remove-url-scheme';`

```typescript
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RemoveUrlSchemeModule } from '@helt/remove-url-scheme';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ...
    HttpClientModule,
    RemoveUrlSchemeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
 
```

2) Pipe or through DI in component
```html
<button mat-stroked-button>
    <i class="material-icons">language</i>
    {{'https://github.com/' | removeUrlScheme}}
</button>

```


```typescript
import { RemoveUrlSchemePipe } from '@helt/remove-url-scheme';

export class ExampleComponent implements OnInit {
  newUrl!: string;
  constructor(private rus: RemoveUrlSchemePipe) {
    this.newUrl = this.rus.tranform(url);
  }
  ngOnInit() {
  }
}

```

Before: </br>
![Before](./img/before.PNG) </br>
After: </br>
![After](./img/after.PNG)

