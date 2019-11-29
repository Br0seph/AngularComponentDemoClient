import { AppTestComponentComponent } from 'src/app/app-test-component/app-test-component.component';
import { PerformanceStatsComponent } from 'src/app/performance-stats/performance-stats.component';
import { TestComponent } from './test-component.model';
import { AppTestComponentComponentData } from './data/AppTestComponentComponent.data';

export const testableComponents: TestComponent[] = [
    {
        name: 'AppTestComponentComponent',
        component: AppTestComponentComponent,
        testCases: AppTestComponentComponentData
    },
    {
        name: 'PerformanceStatsComponent',
        component: PerformanceStatsComponent,
        testCases: []
    }
];
