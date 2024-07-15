<template>
    <div id="contact-me" class="contact-me-container">
        <h2 class="contact-me-title">CONTACT ME</h2>
        <div class="form-container">
            <form class="form-element" @submit.prevent="submitForm">
                <div class="form-group form-group-one">
                    <h3 class="hit-me-up">Don't be shy! Hit me up! 👇</h3>
                </div>
                <div class="form-group form-group-two">
                    <input class="full-name" type="text" v-model="name" placeholder="Full name*" required />
                    <input class="email" type="email" v-model="email" placeholder="Email*" required />
                </div>
                <div class="form-group form-group-three">
                    <textarea class="message-textarea" v-model="message" placeholder="Your message here*"
                        required></textarea>
                </div>
                <div class="form-group form-group-four">
                    <button class="send-button" type="submit">Send Message</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
    name: 'ContactMe',
    data() {
        return {
            name: '',
            email: '',
            message: ''
        };
    },
    methods: {
        async submitForm() {
            try {
                let emailParams = {
                    from_name: this.name,
                    from_email: this.email,
                    message: this.message,
                };

                let response = await emailjs.send(
                    'service_abcf58m',
                    'template_xfo5ngd',
                    emailParams,
                    '7cT1tK_lue0nsu5Oj'
                );

                this.name = '';
                this.email = '';
                this.message = '';

                alert('Your message has been sent successfully!');
            } catch (error) {
                console.error('Failed to send your message:', error);
                alert('Oops! Something went wrong. Please try again.');
            }
        }
    }
};
</script>

<style scoped>
.contact-me-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    background-color: #FFFFFF;
}

.contact-me-title {
    display: flex;
    align-items: flex-start;
    font-weight: bold;
    color: #147EFB;
    margin: 0px 300px;
    margin-top: 60px;
}

.form-container {
    border-radius: 30px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    margin: 60px 300px;
    background-color: #F9F9F9;
}

.hit-me-up {
    font-size: 22px;
}

.form-element {
    margin: 40px;
}

.form-group {
    margin-bottom: 10px;
}

.form-group-one {
    display: flex;
    justify-content: center;
}

.form-group-two {
    display: flex;
    flex-direction: row;
    gap: 10px;
    justify-content: space-between;
}

.form-group-three {
    display: flex;
    justify-content: center;
}

.form-group-four {
    display: flex;
    justify-content: center;
}

.full-name, .email, 
.message-textarea {
    width: 100%;
    padding: 20px;
    border: 1px solid #ced4da;
    border-radius: 30px;
    font-size: 18px;
    font-weight: 500;
}

.full-name:focus, .email:focus,
.message-textarea:focus {
    color: #212529;
    background-color: #fff;
    border-color: #86b7fe;
    outline: 0;
    box-shadow: 0 0 0 .25rem rgba(13, 110, 253, .25);
}

.message-textarea {
    height: 100px;
    resize: none;
}

.send-button {
    display: flex;
    justify-content: center;
    align-self: center;
    width: 30%;
    padding: 15px;
    background-color: #4d73ff;
    color: white;
    font-size: 18px;
    font-weight: bold;
    border: none;
    border-radius: 30px;
    cursor: pointer;
}

.send-button:hover {
    background-color: #3b5abd;
}
</style>