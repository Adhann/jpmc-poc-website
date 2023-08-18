import React from "react";
import { StyleSheet, View } from "react-native";
import { JpmcTabView } from "jpmc-poc-components/dist/organisms";
import { JpmcAccountList } from "jpmc-poc-components/dist/molecules";
import {
  JpmcAccountItem,
  JpmcDivider,
  JpmcTransactionItem,
  JpmcText
} from "jpmc-poc-components/dist/atoms";
import stylesWeb from "./styles.module.scss"

export default function Homepage() {
  return (
    <div className={stylesWeb.homeContainer}>
      <JpmcText value="Welcome back, Alex" style={{
        fontSize: 16,
        display: "flex",
        justifyContent: "center",
        marginBottom: 50
      }} />
      <div className={stylesWeb.cardContainer}>
        <div className={stylesWeb.tabContainer}>
          <JpmcTabView
            childern={
              <JpmcAccountList
                transactions={
                  <>
                    <JpmcAccountItem
                      title="Current Accounts"
                      balance="$117.00"
                      annualRate=".1%AER"
                    />
                    <JpmcDivider />
                    <View style={styles.transactionItem}>
                      <JpmcTransactionItem
                        icon="/assets/Going-out.png"
                        title="Spending from"
                        subTitle="Alex'Account"
                        amount="$500"
                      />
                      <JpmcTransactionItem
                        icon="/assets/Going-out.png"
                        subTitle="Going Out"
                        amount="$500"
                      />
                    </View>
                  </>
                }
              />
            }
          />
        </div>

        <div className={stylesWeb.activityContainer}>
          <JpmcText value="All Activity" style={{
            fontSize: 18,
            margin: 20
          }} />
          <JpmcDivider />
          <View style={styles.transactionItem}>
            <JpmcTransactionItem icon="/assets/Reward.png"
              title="From Rewards"
              subTitle="15:00 22 May"
              amount="$500"
            />
          </View>
        </div>
      </div>
    </div>
  );
}

const styles = StyleSheet.create({
  transactionItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    gap: 25,
    padding: 20,
  },
});
