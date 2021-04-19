<template>
    <div>
        <div v-show="loading">
            <Loading />
        </div>
        <div v-show="!loading" class="issue-box-container">
            <div class="header">
                <img src="@/assets/img/issue-opened.svg">Opened Issues
            </div> 
            <div v-for="issue in this.issueLists" :key="issue.id" class="box-content">  
                <div class="box-title">
                    <img src="@/assets/img/issue-opened-green.svg">
                    <NuxtLink :to="`/issues/${issue.number}`">
                        {{ issue.title }}
                    </NuxtLink>
                </div>
                <div class="box-subtitle">#{{ issue.number }} opened by {{ issue.user.login }}</div>
            </div>
            <ul class="box-pagination">
                <li @click="getIssueLists(1)">&laquo;</li>
                    <div v-for="index in lastPage" :key="index">
                        <li @click="getIssueLists(index)" :class='{ active: activeList[index - 1] }'>{{ index }}</li>
                    </div>
                <li @click="getIssueLists(lastPage)">&raquo;</li>
            </ul>
        </div>
    </div>
</template>
<script lang="ts">
import axios from "axios";
import Vue from "vue"
import Loading from '../Loading/Loading.vue';

export type DataType = {
    page: Number
    lastPage: Number
    loading: Boolean
    issueLists: Array<String>
    activeList: Array<Boolean>
}

export default Vue.extend({
    components: {
      Loading
    },
    data(): DataType {
        return {
            page: 1,
            lastPage: 10,
            loading: true,
            issueLists: [],
            activeList: [true, false, false, false, false, false, false, false, false, false]
        };
    },
    methods: {
        async getIssueLists(page: number) {
            this.loading = true;
            for (let i = 0; i < this.activeList.length; i++) {
                this.activeList[i] = (i === page - 1) ? true : false;
            }
            await axios.get(`https://api.github.com/repos/facebook/react/issues?page=${page}&per_page=10`,
            {
                headers: {
                    "Accept": "application/vnd.github.v3.repository+json"
            }
            }).then(response => {
                console.log(response.data);
                this.issueLists = response.data;
                this.loading = false;
            }).catch(function (error) {
                console.log(error);
	        });
        }
    },
    created() {
        this.getIssueLists(Number(this.page));
    }
})
</script>
<style lang="scss" src="./IssueBox.scss" scoped></style>