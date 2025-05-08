'use client'

import Image from 'next/image'
import styles from './page.module.css'
import { useEffect } from 'react'

export default function Home() {

  function handleLogEvent() {
    const BranchSDK = require('branch-sdk');
    BranchSDK.logEvent('Custom Button Clicked');
    console.log("Branch event logged");
  }

  function handleLogEvent2() {
    const BranchSDK = require('branch-sdk');
    BranchSDK.track('pageview');
    console.log("Branch event logged");
  }

  useEffect(() => {
    async function initAndFetch() {
      const BranchSDK = (await import('branch-sdk')).default

      BranchSDK.setRequestMetaData("sample_key", "sample_value")

      BranchSDK.init("key_live_hxaCJGVYN2EoATD8Sw49CaefFveq6fR0")

      BranchSDK.data(function (err, data) {
        if (err) {
          console.warn("Branch failed to resolve link")
          return;
        }

        console.log("Branch SDK initialised");
      })
    }

    initAndFetch()
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          AppleDex
        </p>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/hero-image.png"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
      <div>
          <button onClick={handleLogEvent}>Log Branch Event</button>
        </div>
        <div>
        <button onClick={handleLogEvent2}>Log Branch Event 2</button>
        </div>

    </main>
  )
}
