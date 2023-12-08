export declare interface DicData {
    readonly value: string | number;
    readonly label: string;
    disabled?: boolean;
}
export interface FormItemProps {
    readonly type?: string;
    prop: string;
    label: string;
    sort?: number;
    span?: number;
    defaultValue?: any;
    placeholder?: string;
    disabled?: boolean;
    required?: boolean;
    prefix?: Function;
    suffix?: Function;
    prepend?: Function;
    append?: Function;
    tip?: string;
    format?: string;
    readonly?: boolean;
    filterable?: boolean;
    clearable?: boolean;
    dicData?: DicData[];
    loadDicData?: Function;
    hide?: boolean;
    multiple?: boolean;
    editable?: boolean;
    rules?: any;
    disabledDate?: Function;
    shortcuts?: any[];
    divider?: any;
    remark?: string;
    onChange?: Function;
    tableSelect?: any;
    tableSelectRows?: any[];
    tableSelectProps?: {
        label: string;
        value: string | number;
    };
    tableSelectDefaultValue?: Function;
    onTableSelect?: Function;
}
export declare const tableSelectConfig: {
    selection: boolean;
    selectType: string;
    addBtn: boolean;
    viewBtn: boolean;
    delBtn: boolean;
    editBtn: boolean;
    batchDelBtn: boolean;
    dialogWidth: string;
    dialogFullscreen: boolean;
    closeOnClickModal: boolean;
    refreshBtn: boolean;
    settingBtn: boolean;
    operations: boolean;
};
declare const _default: {
    size: string;
    colSpan: number;
    labelWidth: string;
    columnMinWidth: number;
    columns: unknown;
    formDatum: any;
    tableSelectConfig: {
        selection: boolean;
        selectType: string;
        addBtn: boolean;
        viewBtn: boolean;
        delBtn: boolean;
        editBtn: boolean;
        batchDelBtn: boolean;
        dialogWidth: string;
        dialogFullscreen: boolean;
        closeOnClickModal: boolean;
        refreshBtn: boolean;
        settingBtn: boolean;
        operations: boolean;
    };
    isEditing: boolean;
    showResetBtn: boolean;
};
export default _default;
