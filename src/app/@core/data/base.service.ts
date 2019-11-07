import { Injectable, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';

import { Paginatable } from './paginatable';
import { map } from 'rxjs/operators';
import { TakeUntilDestroy, untilDestroyed } from 'ngx-take-until-destroy';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface Endpoints {
  index?: string;
  show?: string;
  create?: string;
  update?: string;
  delete?: string;
  search?: string;
  [path: string]: string;
}

@TakeUntilDestroy()
@Injectable()
export class BaseService<T> implements OnDestroy {
  endpoints: Endpoints = {};

  constructor(
    protected http: HttpClient,
  ) { }

  ngOnDestroy() { }

  getAll(
    options?: { page: string },
    pathParams?: object,
    qs?: object,
  ): Observable<{} | Paginatable<T>> {
    const endpoint = this.getEndpoint('index', pathParams);
    const params = { ...qs, ...{ page: options.page } };

    return this.http.get(endpoint, { params }).pipe(
      untilDestroyed(this),
      map(body => body as Paginatable<T>),
    );
  }

  getById(id: number, pathParams?: object): Observable<T> {
    const endpoint = this.getEndpoint('show', { ...pathParams, id });
    return this.http.get(endpoint).pipe(
      untilDestroyed(this),
      map(body => body as T),
    );
  }

  get(pathParams?: object): Observable<T> {
    const endpoint = this.getEndpoint('show', pathParams || {});
    return this.http.get(endpoint).pipe(
      untilDestroyed(this),
      map(body => body as T),
    );
  }

  create(
    model: any,
    pathParams?: object,
    headers?: HttpHeaders,
  ): Observable<T> {
    const endpoint = this.getEndpoint('create', pathParams);
    headers = headers || new HttpHeaders();

    return this.http.post(endpoint, model, { headers }).pipe(
      untilDestroyed(this),
      map(body => body as T),
    );
  }

  update(payload: any = {}): Observable<T> {
    const endpoint = this.getEndpoint('update');

    return this.http.patch(endpoint, payload).pipe(
      untilDestroyed(this),
      map(body => body as T),
    );
  }

  updateById(id: number, model: any): Observable<any> {
    const endpoint = this.getEndpoint('update', { id });

    return this.http.patch(endpoint, model).pipe(
      untilDestroyed(this),
      map(body => body as T),
    );
  }

  delete(id: number, pathParams?: object): Observable<T> {
    const endpoint = this.getEndpoint('delete', { ...pathParams, id });

    return this.http.delete(endpoint).pipe(
      untilDestroyed(this),
      map(body => body as T),
    );
  }

  protected getEndpoint(name: string, params?: object): string {
    const endpoint = this.endpoints[name];
    if (endpoint) {
      return this.formatEndpoint(endpoint, params || {});
    } else {
      throw new Error(`Endpoint ${name} not configured.`);
    }
  }

  private formatEndpoint(template: string, params: Object): string {
    Object.entries(params).forEach(([key, value]) => {
      template = template.replace(`:${key}`, value);
    });

    return template;
  }
}
