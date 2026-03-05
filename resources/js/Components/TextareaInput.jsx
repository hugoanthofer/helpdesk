import { forwardRef } from 'react';

export default forwardRef(function TextareaInput({ className = '', rows = 4, ...props }, ref) {
    return (
        <textarea
            {...props}
            rows={rows}
            className={
                'w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-blue-600 focus:outline-none ' +
                className
            }
            ref={ref}
        />
    );
});
