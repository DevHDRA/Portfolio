import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { repoArrayData } from "../types/global";
import { environment } from '../../environments/environment';

@Injectable()
export class gitHubService {

    currentRepo: repoArrayData = {
        name: '',
        html_url: '',
        description: '',
        language: '',
        created_at: '',
        updated_at: '',
    }

    constructor(
        private httpClient: HttpClient
    ) {}


    getAllRepos() {
        return this.httpClient.get(`${environment.APIURL}/dev/porfoliodata/getrepos`)
    }

    getRepoMd(repo: string) {
        return this.httpClient.get(`${environment.APIURL}/dev/porfoliodata/getrepos?repo=${repo}`)
    }

    setCurrentRepo(repo: repoArrayData) {
        this.currentRepo = repo
    }

}