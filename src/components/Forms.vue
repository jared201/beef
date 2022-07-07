<template>
    <div class="sidebar-sensitive">
        <div class="panel-heading">
            {{ msg }}
        </div>
        <div class="columns py-3 is-6">
            <div class="column">
                <div class=" panel notification">
                    <div class=" is-child notification panel-heading is-success">
                        Login
                    </div>
                    <div class="content">
                        <div class="field">
                            <p class="control has-icons-left has-icons-right ">
                                <input class="input" type="email" placeholder="Email">
                                <span class="icon is-small is-left">
                                <i class="fas fa-envelope"></i><font-awesome-icon :icon="['far', 'envelope']" />
                                </span>
                                <span class="icon is-small is-right">
                                <i class="fas fa-check"></i>
                                </span>
                            </p>
                        </div>
                        <div class="field">
                            <p class="control has-icons-left">
                                <input class="input" type="password" placeholder="Password">
                                <span class="icon is-small is-left">
                                <i class="fas fa-lock"></i><font-awesome-icon :icon="['fas', 'lock']" />
                                </span>
                            </p>
                        </div>
                        <div>
                            <button class="is-danger button">Login</button>
                        </div>
                </div>                    
                </div>
                
            </div>
            <div class="column">
                <div class="is-parent notification">
                    <div class=" is-child notification panel-heading is-info">
                        Personal Info
                    </div>
                    <div class="content">
                        <div class="field">
                            <p class="control has-icons-left">
                                <input class="input" placeholder="Name"/>
                                <span class="icon is-small is-left">
                                <i class="fas fa-user"></i><font-awesome-icon :icon="['far', 'user']" />
                                </span>
                            </p>                            
                        </div>
                        <div class="field">
                            <p class="control has-icons-left">
                                <input class="input" placeholder="Address"/>
                                <span class="icon is-small is-left">
                                <i class="fas fa-user"></i><font-awesome-icon :icon="['fas', 'house']" />
                                </span>
                            </p>                            
                        </div>
                        <div class="field">
                            <p class="control has-icons-left">
                                <input class="input" placeholder="Phone"/>
                                <span class="icon is-small is-left">
                                <i class="fas fa-user"></i><font-awesome-icon :icon="['fas', 'phone']" />
                                </span>
                                
                            </p>                            
                        </div>
                        <div class="content">
                            <button class=" button mr-3">Submit</button>
                            <button class=" is-warning button mr-3">Cancel</button>

                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        <div class="columns pb-3">
            <div class="column">
                <div class=" is-parent notification">
                    <div class=" is-child notification panel-heading is-warning">
                        Message Form
                    </div>
                    <div class="content">
                        <textarea class="textarea" placeholder="0/250 characters"></textarea>
                    </div>
                    <div class="content">
                        <button class="button has-icons-left is-info">
                        <span class="icon">                            
                            <i class="fas fa-bold"><font-awesome-icon :icon="['fas', 'paper-plane']"></font-awesome-icon></i>
                        </span><p>Send Message</p>
                        </button>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="is-parent notification">
                    <div class=" is-child notification panel-heading is-danger">
                        Question Form
                    </div>
                    <div class="control tile is-child">
                    <label class="radio">
                        <input type="radio" name="answer">
                        Male
                    </label>
                    <label class="radio">
                        <input type="radio" name="answer">
                        Female
                    </label>
                </div>
                </div>

            </div>
        </div>
        <div class="columns pb-3">
            <div class="column">
                <div class=" is-parent notification">
                    <div class=" is-child notification panel-heading is-dark">
                        Upload Form
                    </div>
                    <div class="content">
                        <div class="file">
                            <label class="file-label">
                                <input class="file-input" type="file" name="resume" @change="uploadFile">
                                <span class="file-cta">
                                <span class="file-icon">
                                    <i class="fas fa-upload"></i><font-awesome-icon :icon="['fas', 'upload']"></font-awesome-icon>
                                </span>
                                <span class="file-label">
                                    Choose a file…
                                </span>
                                </span>
                            </label>
                        </div>
                    </div>
                    <div>
                        <progress id="progress" class="progress is-success"  value="0" max="100">{{progres}}%</progress>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="is-parent notification">
                    <div class=" is-child notification panel-heading is-gray">
                        Country dropdown
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { onMounted } from 'vue'
import NavBarHeaderVue from './NavBarHeader.vue'

export default {
    setup() {
         onMounted(() => {
        var sidebarSensitiveDivs = document.querySelectorAll(".sidebar-sensitive");
        for (let i = 0; i < sidebarSensitiveDivs.length; i++) {
                sidebarSensitiveDivs[i].addEventListener('click', function(event) {
                NavBarHeaderVue.methods.closeNav(event);
                });
            }
        })
    },
    data() {
        return {
            msg: "Forms demo here",
            progres: "1",
        }
    },
    methods: {
        uploadFile(event){
            console.log(event.target.files);
            //run the progress bar
            const prog = document.getElementById("progress");            
            loop(prog);
        }
    }
}


let x = 0;

function loop (prog) { 
    console.log("looping: " + x)
    prog.value++
    setTimeout(()=> {        
        x++;
        if ( x < 100){          
          loop(prog);          
        } else {
            return;
        }        
    }, 300)
    
}

</script>
<style>

</style>