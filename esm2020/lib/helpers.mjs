export const getErrorMessages = (validations) => {
    const res = {};
    validations.forEach((item) => {
        if (item.type === 'required')
            res.required = item.errorMessage;
        if (item.type === 'minLength')
            res.minLength = item.errorMessage;
        if (item.type === 'min')
            res.min = item.errorMessage;
        if (item.type === 'maxLength')
            res.maxLength = item.errorMessage;
        if (item.type === 'max')
            res.max = item.errorMessage;
        if (item.type === 'email')
            res.email = item.errorMessage;
        if (item.type === 'pattern')
            res.email = item.errorMessage;
    });
    return res;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItZ2V0Zm9ybS9zcmMvbGliL2hlbHBlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsTUFBTSxDQUFDLE1BQU0sZ0JBQWdCLEdBQUcsQ0FBQyxXQUE4QixFQUFFLEVBQUU7SUFDakUsTUFBTSxHQUFHLEdBQVEsRUFBRSxDQUFDO0lBQ3BCLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtRQUMzQixJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssVUFBVTtZQUFFLEdBQUcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUMvRCxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssV0FBVztZQUFFLEdBQUcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUNqRSxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssS0FBSztZQUFFLEdBQUcsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUNyRCxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssV0FBVztZQUFFLEdBQUcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUNqRSxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssS0FBSztZQUFFLEdBQUcsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUNyRCxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssT0FBTztZQUFFLEdBQUcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUN6RCxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssU0FBUztZQUFFLEdBQUcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztJQUM3RCxDQUFDLENBQUMsQ0FBQztJQUNILE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVFZhbGlkYXRpb25JdGVtIH0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBnZXRFcnJvck1lc3NhZ2VzID0gKHZhbGlkYXRpb25zOiBUVmFsaWRhdGlvbkl0ZW1bXSkgPT4ge1xuICBjb25zdCByZXM6IGFueSA9IHt9O1xuICB2YWxpZGF0aW9ucy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgaWYgKGl0ZW0udHlwZSA9PT0gJ3JlcXVpcmVkJykgcmVzLnJlcXVpcmVkID0gaXRlbS5lcnJvck1lc3NhZ2U7XG4gICAgaWYgKGl0ZW0udHlwZSA9PT0gJ21pbkxlbmd0aCcpIHJlcy5taW5MZW5ndGggPSBpdGVtLmVycm9yTWVzc2FnZTtcbiAgICBpZiAoaXRlbS50eXBlID09PSAnbWluJykgcmVzLm1pbiA9IGl0ZW0uZXJyb3JNZXNzYWdlO1xuICAgIGlmIChpdGVtLnR5cGUgPT09ICdtYXhMZW5ndGgnKSByZXMubWF4TGVuZ3RoID0gaXRlbS5lcnJvck1lc3NhZ2U7XG4gICAgaWYgKGl0ZW0udHlwZSA9PT0gJ21heCcpIHJlcy5tYXggPSBpdGVtLmVycm9yTWVzc2FnZTtcbiAgICBpZiAoaXRlbS50eXBlID09PSAnZW1haWwnKSByZXMuZW1haWwgPSBpdGVtLmVycm9yTWVzc2FnZTtcbiAgICBpZiAoaXRlbS50eXBlID09PSAncGF0dGVybicpIHJlcy5lbWFpbCA9IGl0ZW0uZXJyb3JNZXNzYWdlO1xuICB9KTtcbiAgcmV0dXJuIHJlcztcbn07XG4iXX0=