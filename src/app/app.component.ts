import {
  Component,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver
} from '@angular/core';

import {
  PerformanceStatsComponent
} from './performance-stats/performance-stats.component';

import { testableComponents } from 'src/mock/components.const';
import { TestComponent } from 'src/mock/test-component.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('testComponent', { static: true, read: ViewContainerRef }) testComponent: ViewContainerRef;
  @ViewChild('performanceStats', { static: true, read: ViewContainerRef }) performanceStats: ViewContainerRef;

  private startTime: number;

  public testableComponents: TestComponent[];
  public testCases: string[] = [];

  constructor(
    private resolver: ComponentFactoryResolver
  ) {
    this.testableComponents = testableComponents;
  }

  public updateTestComponent(componentName: string): void {
    const componentToTest = testableComponents
      .find(c => c.name === componentName);

    // Payload should come from the selected test case index
    // Why is my brain not working
    const payload = componentToTest.testCases[0].payload;

    if (!componentToTest) {
      throw new Error('Something has gone wrong here.');
    }

    this.reset();
    this.startPerformanceTracking();

    const component = this.resolver.resolveComponentFactory(componentToTest.component);
    const componentRef = this.testComponent.createComponent(component);

    for (const key in payload) {
      if (payload.hasOwnProperty(key)) {
        const obj = payload[key];
        for (const prop in obj) {
          if (obj.hasOwnProperty(prop)) {
            console.log(prop + ' = ' + obj[prop]);
            (componentRef.instance as any)[prop] = obj[prop];
          }
        }
      }
    }

    this.endPerformanceTracking();
  }

  public updateTestCases(componentName: string): void {
    const componentToTest = testableComponents
      .find(c => c.name === componentName);

    componentToTest.testCases.forEach(
      testCase => this.testCases.push(testCase.testName));
    debugger;

    console.log(this.testCases);
  }

  public startPerformanceTracking(): void {
    this.startTime = new Date().getTime();
  }

  public endPerformanceTracking(): void {
    const factory = this.resolver.resolveComponentFactory(PerformanceStatsComponent);
    const componentRef = this.performanceStats.createComponent(factory);
    (componentRef.instance as any).totalRunTime = (new Date().getTime() - this.startTime) + 'ms';

    this.startTime = null;
  }

  private reset(): void {
    if (this.testComponent) {
      this.testComponent.clear();
    }

    if (this.performanceStats) {
      this.performanceStats.clear();
    }
  }
}
