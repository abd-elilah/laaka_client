export interface creancier {
    id: number;
    nom: string;
    logo: string;
    service : string[],
    
  }
  
  export const creancier = [
    {id: 1,
     nom: 'IAM RECHARGES',
     logo:'../assets/images/Maroc_telecom_logo.png',
     service:["TELEPHONE ET INTERNET SIM"] ,
    },
    {
      id: 2,
      nom: 'IAM FACTURES',
      logo:'../assets/images/Maroc_telecom_logo.png',
      service:["PRODUIT INTERNET SIM","PRODUIT FIXE SIM","Produit Mobile Sim"] ,
    },
    {id: 3,
     nom: 'Redal',
     logo:'../assets/images/Redal1.png',
     service: ["Facture Redal"]
    },
    {id: 4,
    nom: 'AMENDIS',
    logo:'../assets/images/Amendis.png',
    service: ["Facture Amendis Tanger"]
     },

    {id: 5,
    nom: 'LYDEC',
    logo:'../assets/images/Lydec.png',
    service: ["Facture Lydec"]
      },

      {id: 6,
      nom: 'AMENDIS',
      logo:'../assets/images/Amendis.png',
      service: ["Facture Amendis Tetouan"]
        },   

  ];