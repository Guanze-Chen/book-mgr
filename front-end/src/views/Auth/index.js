import { defineComponent, reactive } from "vue";
import { auth } from "@/services";
import { message } from "ant-design-vue"
import { result } from "@/helper/utils/index"
import {
    UserOutlined,
    KeyOutlined,
    GiftOutlined,
  } from '@ant-design/icons-vue';

export default defineComponent({
    components: {
        UserOutlined,
        KeyOutlined,
        GiftOutlined,
    },
    setup() {
        const regForm = reactive({
            account: '',
            password: '',
            inviteCode: '',
        });

        const register = async () => {
            if (regForm.account === '') {
                message.info('请输入账号');
                return;
            }

            if (regForm.password === '') {
                message.info('请输入密码');
                return;
            }

        const res = await auth.register(regForm.account, regForm.password, regForm.inviteCode);
        
        result(res)
            .success((data) => {
                message.success(data.msg);
            })
        
        };

        const loginForm = reactive({
            account: '',
            password: ''
        });

        const login = async () => {
            if (loginForm.account === '') {
                message.info('请输入账号');
                return;
            }

            if (loginForm.password === '') {
                message.info('请输入密码');
                return;
            }
        const res = await auth.login(loginForm.account, loginForm.password);

        result(res)
            .success((data) => {
                message.success(data.msg)
            })

        
        };

        return {
            regForm,
            register,
            loginForm,
            login
        }

    }
})