import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { META } from '../../../../config/config';
import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../core/core.module';

export interface Contributor {
  text: string;
  img: string | false;
  name: string;
  title: string;
}
