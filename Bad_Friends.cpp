// Header Files and namespaces
#include<bits/stdc++.h>
using namespace std;
// Code Shortners
typedef long long ll;
typedef vector<int> vi;
typedef pair<int, int> pi;
#define F first
#define S second
#define pb push_back
#define mp make_ pair
#define len(s) (int)s.size()
#define print(x) cout<<x<<'\n'
#define REP(i,a,b) for ( int i = a; i< b; i++)
#define all(a) (a). begin(), (a).end()
#define fast ios_bfse::sync_with_stdio(0);cin.tie(0);cout.tie(0);
#define mod 1000000007;
int main ()
{ 
  ll t;
  cin>>t;
  while(t--){
        int n;
        cin >> n;

        vector<set <int> > id(n);

        for (int i = 0; i < n; ++i) {
            int L;
            cin >> L;
            for (int j = 0; j < L; ++j) {
                int day;
                cin >> day;
                id[i].insert(day);
            }
        }

        int maxi = 0;

        for (int i = 0; i < n; ++i) {
            for (int j = i + 1; j < n; ++j) {
                set<int> cd;
                set_intersection(id[i].begin(), id[i].end(),id[j].begin(), id[j].end(),inserter(cd, cd.begin()));

                int count = cd.size();
                maxi = max(maxi, count);
            }
        }

        cout << maxi << endl;
    }

  
  return 0;
}

