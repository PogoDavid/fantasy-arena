import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      welcome: 'Welcome, {{name}}!',
      Draft: 'Draft',
      Profile: 'Profile',
      Logout: 'Logout',
      currentLeagues: 'Current Leagues',
      league1: 'League 1',
      league2: 'League 2',
      createLeague: 'Create a League',
      joinLeague: 'Join a League',
      selectFormation: 'Select Your Team Formation and Set Budget',
      formation: 'Formation',
      budget: 'Budget',
      enterBudget: 'Enter budget',
      setupTeam: 'Setup Team',
      invalidBudget: 'Please enter a valid budget',
      notificationsAndUpdates: 'Notifications and Updates',
      notification: 'Notification {{number}}: +5 points: Goal by Player A',
      loading: 'Loading...',
      selectPlayer: 'Select a Player for {{position}}',
      searchPlayer: 'Search for a player...',
      topRecommendedPlayers: 'Top Recommended Players',
      price: 'Price',
      goals: 'Goals',
      assists: 'Assists',
      matches: 'Matches',
      avgRating: 'Avg. Rating',
      yellowCards: 'Yellow Cards',
      redCards: 'Red Cards',
      lastFiveGames: 'Last 5 Games',
      select: 'Select',
      close: 'Close',
      recentActivity: 'Recent Activity',
      leagueName: 'League Name',
      numLeagues: 'Number of Leagues',
      pointsFor: 'Points for',
      scoredGoal: 'Scored Goal',
      assist: 'Assist',
      yellowCard: 'Yellow Card',
      redCard: 'Red Card',
      ownGoal: 'Own Goal',
      cleanSheet: 'Keeper Clean Sheet',
      cancel: 'Cancel',
      remainingBudget: 'Remaining Budget',
      saveTeamAndExit: 'Save Team and Exit',
      addTeamToLeague: 'Add Team to a League',
      reset: 'Reset',
    },
  },
  de: {
    translation: {
      welcome: 'Willkommen, {{name}}!',
      Draft: 'Entwurf',
      Profile: 'Profil',
      Logout: 'Ausloggen',
      currentLeagues: 'Aktuelle Ligen',
      league1: 'Liga 1',
      league2: 'Liga 2',
      createLeague: 'Eine Liga erstellen',
      joinLeague: 'Einer Liga beitreten',
      selectFormation:
        'Wählen Sie Ihre Teamformation und setzen Sie das Budget fest',
      formation: 'Formation',
      budget: 'Budget',
      enterBudget: 'Budget eingeben',
      setupTeam: 'Team einrichten',
      invalidBudget: 'Bitte geben Sie ein gültiges Budget ein',
      notificationsAndUpdates: 'Benachrichtigungen und Updates',
      notification:
        'Benachrichtigung {{number}}: +5 Punkte: Tor durch Spieler A',
      loading: 'Wird geladen...',
      selectPlayer: 'Wählen Sie einen Spieler für {{position}} aus',
      searchPlayer: 'Suche nach einem Spieler...',
      topRecommendedPlayers: 'Top-Empfohlene Spieler',
      price: 'Preis',
      goals: 'Tore',
      assists: 'Vorlagen',
      matches: 'Spiele',
      avgRating: 'Durchschn. Bewertung',
      yellowCards: 'Gelbe Karten',
      redCards: 'Rote Karten',
      lastFiveGames: 'Letzte 5 Spiele',
      select: 'Auswählen',
      close: 'Schließen',
      recentActivity: 'Aktuelle Aktivitäten',
      leagueName: 'Liganaam',
      numLeagues: 'Anzahl der Ligen',
      pointsFor: 'Punkte für',
      scoredGoal: 'Erzieltes Tor',
      assist: 'Assist',
      yellowCard: 'Gelbe Karte',
      redCard: 'Rote Karte',
      ownGoal: 'Eigentor',
      cleanSheet: 'Keeper Clean Sheet',
      cancel: 'Abbrechen',
      remainingBudget: 'Verbleibendes Budget',
      saveTeamAndExit: 'Team speichern und beenden',
      addTeamToLeague: 'Team einer Liga hinzufügen',
      reset: 'Zurücksetzen',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
