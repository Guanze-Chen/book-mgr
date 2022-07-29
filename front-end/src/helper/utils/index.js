import { message } from 'ant-design-vue'

export const result = (response) => {
    const { data } = response;

    if (data.code === 0) {
        message.error(data.msg);
    };

    return {
        success(cb) {
            if (data.code !== 0) {
                cb(data, response);
            };

            return this;
        },

        fail(cb) {
            if (data.code === 0) {
                cb(data, response)
            };

            return this;
        },

        finally(cb) {
            cb(data, response);
            return this;
        }


    }


}