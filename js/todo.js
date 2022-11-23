const { createApp } = Vue;



const app = createApp({

    data() {

        return {
            taskList: [
                {
                    text: "promemoria",
                    done: false,
                    category: "categoria",
                },

            


            ],
            newTaskData: {
                text: "",
                category: "",
            }


        };

    },

    methods: {
        onFormSubmit() {

            this.taskList.push({
                text: this.newTaskData.text,
                category: this.newTaskData.category,
                done: false,
            });
            

        },



        //cancella elemento array in base al suo indice
        onDeleteBtnClick(indexToDelete) {

            const confirmed = confirm("sei sicuro di cancellare l'elemento?")
            if (confirmed) {

                this.taskList.splice(indexToDelete, 1);

            }

        },


    },




}).mount('#app');