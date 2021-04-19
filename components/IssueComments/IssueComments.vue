<template>
<div>
    <div v-show="loading">
        <Loading />
    </div>
    <div v-show="!loading" class="issue-comments-container">
        <div class="container-title">{{ issue.title }}<span>#{{ issue.number }}</span></div>
        <hr>
        <div class="box">
          <img class="avatar" :src=avatar_url>
          <div class="comment">
            <div class="comment-title"><span>{{ login }}</span> commented </div>
            <no-ssr>
              <mavon-editor
                  v-model="body"
                  defaultOpen="preview"
                  previewBackground="#fff"
                  :language="'en'" 
                  :subfield="false"
                  :toolbars="toolbars"
              />
            </no-ssr>
          </div>
      </div>
    </div>
</div>
</template>
<script lang="ts">
import axios from "axios";
import Vue from "vue";
import Loading from '../Loading/Loading.vue';

export type DataType = {
    issue: Array<String>
    issueNumber: Number
    body: String
    avatar_url: String
    login: String
    loading: Boolean
    toolbars: Object
}

export default Vue.extend({
    components: {
        Loading
    },
    data(): DataType {
      return {
      issue: [],
      issueNumber: 1,
      body: '',
      avatar_url: '',
      login: '',
      loading: true,
      toolbars: {
          bold: false,
          italic: false,
          header: false,
          underline: false,
          strikethrough: false,
          mark: false,
          superscript: false,
          subscript: false,
          quote: false,
          ol: false,
          ul: false,
          link: false,
          imagelink: false,
          code: false,
          table: false,
          fullscreen: false,
          readmodel: false,
          htmlcode: false,
          help: false,
          undo: false,
          redo: false,
          trash: false,
          save: false,
          navigation: false,
          alignleft: false,
          aligncenter: false,
          alignright: false,
          subfield:false,
          preview: false
        }
      }     
    },
    methods: {
        async getIssue() {
            this.loading = true;
            await axios.get(`https://api.github.com/repos/facebook/react/issues/${this.issueNumber}`
            ).then(response => {
                console.log(response.data);
                this.issue = response.data;
                this.body = response.data.body;
                this.avatar_url = response.data.user.avatar_url
                this.login = response.data.user.login
                this.loading = false;
            });
        }
    },
    created() {
        this.issueNumber = Number(this.$route.params.number);
        this.getIssue();
    }
})
</script>
<style lang="scss" src="./IssueComments.scss" scoped></style>