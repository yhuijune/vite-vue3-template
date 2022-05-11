module.exports = {
    types: [
        { value: 'feature', name: 'feature:  增加新功能' },
        { value: 'fix', name: 'fix:      修复bug' },
        { value: 'ui', name: 'ui:       更新UI' },
        { value: 'docs', name: 'docs:     变更文档' },
        { value: 'style', name: 'style:    修改代码格式' },
        { value: 'perf', name: 'perf:     性能优化' },
        { value: 'refactor', name: 'refactor: 重构代码' },
        { value: 'test', name: 'test:     测试用例' },
        { value: 'chore', name: 'chore:    改变构建流程、或者增加依赖库、工具等' },
        { value: 'merge', name: 'merge:    合并' },
        { value: 'revert', name: 'revert:   回滚' },
        { value: 'release', name: 'release:  发布' },
        { value: 'build', name: 'build:    打包' }
    ],
    messages: {
        type: '请选择提交类型:',
        customScope: '请输入您修改的范围(可选):',
        subject: '请简要描述提交 message (必填):',
        body: '请输入详细描述(可选):',
        footer: '请输入要关闭的issue(可选):',
        confirmCommit: '确认使用以上信息提交？(y/n)'
    },
    allowCustomScopes: true,
    skipQuestions: ['body', 'footer'],
    subjectLimit: 72
};