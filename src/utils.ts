import { CancelablePromise } from './types';

export function makeCancelablePromise<T = any>(promise: Promise<T>): CancelablePromise<T> {
    let hasCanceled_ = false;

    const wrappedPromise = new Promise<T>((resolve, reject) => {
        promise.then(
            (val) => (hasCanceled_ ? reject({ isCanceled: true }) : resolve(val)),
            (error) => (hasCanceled_ ? reject({ isCanceled: true }) : reject(error))
        );
    });

    return {
        promise: wrappedPromise,
        cancel() {
            hasCanceled_ = true;
        },
    };
}
