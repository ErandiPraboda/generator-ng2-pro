import {Pipe, PipeTransform} from '@angular/core';


@Pipe({ name: '<%=pipename%>' })
export class <%=pipenameClass%> implements PipeTransform {
	transform(value: string, ?args: string[]): any {
		return value;
	}
}