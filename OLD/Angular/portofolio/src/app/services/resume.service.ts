import { Injectable } from "@angular/core";
import { ResumeCard } from "../models/resume-card";

@Injectable({
    providedIn: 'root'
})

export class ResumeService {
    private resumeCards: ResumeCard[] = [
        new ResumeCard (
            "11",
            "education",
            "Polytech Grenoble, France",
            "2024-2026",
            "INGÉNiEUR EN iNFORMATiQUE/DOUBLE DiPLÔME. \n Programme spécialisé en développement logiciel & systèmes et réseau"
        ),
        new ResumeCard (
            "12",
            "education",
            "Polytech Yaoundé, Cameroun",
            "2020-2024",
            "INGÉNiEUR EN iNFORMATiQUE/DOUBLE DiPLÔME. \n Programme spécialisé en développement logiciel & systèmes et réseau"
        ),
        new ResumeCard (
            "13",
            "education",
            "Lycée Bilingue de Mendong",
            "2024-2026",
            "INGÉNiEUR EN iNFORMATiQUE/DOUBLE DiPLÔME. \n Programme spécialisé en développement logiciel & systèmes et réseau"
        ),
        new ResumeCard (
            "13",
            "experience",
            "CCA Bank, Yaoundé",
            "Juillet 2024 - Août 2024",
            "Stage académique"
        ),
        new ResumeCard (
            "13",
            "experience",
            "Freelance",
            "2024-2026",
            "INGÉNiEUR EN iNFORMATiQUE/DOUBLE DiPLÔME. \n Programme spécialisé en développement logiciel & systèmes et réseau"
        ),
        new ResumeCard (
            "13",
            "certification",
            "Lycée Bilingue de Mendong",
            "2024-2026",
            "INGÉNiEUR EN iNFORMATiQUE/DOUBLE DiPLÔME. \n Programme spécialisé en développement logiciel & systèmes et réseau"
        ),
        new ResumeCard (
            "13",
            "certification",
            "Lycée Bilingue de Mendong",
            "2024-2026",
            "INGÉNiEUR EN iNFORMATiQUE/DOUBLE DiPLÔME. \n Programme spécialisé en développement logiciel & systèmes et réseau"
        ),
        new ResumeCard (
            "13",
            "certification",
            "Lycée Bilingue de Mendong",
            "2024-2026",
            "INGÉNiEUR EN iNFORMATiQUE/DOUBLE DiPLÔME. \n Programme spécialisé en développement logiciel & systèmes et réseau"
        ),
        new ResumeCard (
            "13",
            "certification",
            "Lycée Bilingue de Mendong",
            "2024-2026",
            "INGÉNiEUR EN iNFORMATiQUE/DOUBLE DiPLÔME. \n Programme spécialisé en développement logiciel & systèmes et réseau"
        )

    ]

    getResumeCards(): ResumeCard[] {
        return [...this.resumeCards];
    }
}