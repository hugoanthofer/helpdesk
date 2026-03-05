import { forwardRef } from 'react';

const SelectArrow = () => (
    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
    </div>
);

export default forwardRef(function SelectInput({ className = '', children, ...props }, ref) {
    return (
        <div className="relative">
            <select
                {...props}
                className={
                    'appearance-none w-full rounded-md border border-slate-300 px-3 py-2 pr-8 text-sm focus:border-blue-600 focus:outline-none ' +
                    className
                }
                ref={ref}
            >
                {children}
            </select>
            <SelectArrow />
        </div>
    );
});
