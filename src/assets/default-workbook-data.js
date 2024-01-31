/**
 * Copyright 2023-present DreamNum Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import {
    BooleanNumber,
    LocaleType,
    SheetTypes
} from '@univerjs/core';

/**
 * Default workbook data
 * @type {IWorkbookData} document see https://univer.work/api/core/interfaces/IWorkbookData.html
 */
export const DEFAULT_WORKBOOK_DATA = {
    id: 'workbook-01',
    locale: LocaleType.ZH_CN,
    name: 'universheet',
    sheetOrder: ['sheet-01', 'sheet-02', 'sheet-03'],
    appVersion: '3.0.0-alpha',
    sheets: {
        'sheet-01': {
            type: SheetTypes.GRID,
            id: 'sheet-01',
            cellData: {
                '0': {
                    '0': {
                        v: 'Hello World',
                    },
                },
            },
            name: 'sheet1',
            tabColor: 'red',
            hidden: BooleanNumber.FALSE,
            rowCount: 1000,
            columnCount: 20,
            zoomRatio: 1,
            scrollTop: 200,
            scrollLeft: 100,
            defaultColumnWidth: 93,
            defaultRowHeight: 27,
            status: 1,
            showGridlines: 1,
            hideRow: [],
            hideColumn: [],
            rowHeader: {
                width: 46,
                hidden: BooleanNumber.FALSE,
            },
            columnHeader: {
                height: 20,
                hidden: BooleanNumber.FALSE,
            },
            selections: ['A2'],
            rightToLeft: BooleanNumber.FALSE,
            pluginMeta: {},
        },
        'sheet-02': {
            type: SheetTypes.GRID,
            id: 'sheet-02',
            name: 'sheet2',
            cellData: {},
        },
        'sheet-03': {
            type: SheetTypes.GRID,
            id: 'sheet-03',
            name: 'sheet3',
            cellData: {},
        },
    },
};
